import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { compareToken } from '@/lib/auth'
import { signAccessToken, generateRefreshToken, hashToken } from '@/lib/auth'
import { verifyCsrfToken } from '@/lib/csrf'
import { logger } from '@/lib/logger'

export async function POST(req: Request) {
  try {
    const csrfHeader = req.headers.get('x-csrf-token') || undefined
    const csrfOk = await verifyCsrfToken(csrfHeader)
    if (!csrfOk) {
      return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 })
    }

    const cookie = req.headers.get('cookie') || ''
    const match = /refresh_token=([^;]+)/.exec(cookie)
    if (!match) {
      return NextResponse.json({ error: 'Missing refresh token' }, { status: 401 })
    }
    const [id, raw] = decodeURIComponent(match[1]).split(':')
    if (!id || !raw) {
      return NextResponse.json({ error: 'Malformed refresh token' }, { status: 400 })
    }
    const rt = await prisma.refreshToken.findUnique({ where: { id } })
    if (!rt || rt.revokedAt || rt.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Refresh token invalid' }, { status: 401 })
    }
    const ok = await compareToken(raw, rt.tokenHash)
    if (!ok) {
      return NextResponse.json({ error: 'Refresh token mismatch' }, { status: 401 })
    }
    // rotate
    const newRaw = generateRefreshToken()
    const newHash = await hashToken(newRaw)
    await prisma.refreshToken.update({ where: { id }, data: { tokenHash: newHash, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } })

    // issue access
    const user = await prisma.user.findUniqueOrThrow({ where: { id: rt.userId } })
    const access = await signAccessToken({ id: user.id, email: user.email, role: user.role }, true)

    const res = NextResponse.json({ ok: true }, { status: 200 })
    res.cookies.set('access_token', access, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 30 })
    res.cookies.set('refresh_token', `${id}:${newRaw}`, { httpOnly: true, secure: true, sameSite: 'strict', path: '/api/auth/refresh', maxAge: 60 * 60 * 24 * 7 })
    logger.info({ event: 'refresh_success', userId: user.id }, 'Access token refreshed')
    return res
  } catch (e: any) {
    logger.error({ err: e }, 'Refresh failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}