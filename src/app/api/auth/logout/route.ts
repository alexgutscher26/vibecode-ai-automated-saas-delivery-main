import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
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
    if (match) {
      const [id] = decodeURIComponent(match[1]).split(':')
      if (id) {
        await prisma.refreshToken.updateMany({ where: { id }, data: { revokedAt: new Date() } })
      }
    }
    const res = NextResponse.json({ ok: true }, { status: 200 })
    res.cookies.set('access_token', '', { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 0 })
    res.cookies.set('refresh_token', '', { httpOnly: true, secure: true, sameSite: 'strict', path: '/api/auth/refresh', maxAge: 0 })
    logger.info({ event: 'logout' }, 'User logged out')
    return res
  } catch (e: any) {
    logger.error({ err: e }, 'Logout failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}