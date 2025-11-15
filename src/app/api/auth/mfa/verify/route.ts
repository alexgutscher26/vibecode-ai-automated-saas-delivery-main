import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'
import { cookies } from 'next/headers'
import { verifyAccessToken, signAccessToken } from '@/lib/auth'
import { authenticator } from 'otplib'

const Schema = z.object({ code: z.string().min(6).max(6) })

export async function POST(req: Request) {
  try {
    const access = cookies().get('access_token')?.value
    if (!access) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const payload = await verifyAccessToken(access).catch(() => null)
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const body = await req.json()
    const parsed = Schema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

    const user = await prisma.user.findUniqueOrThrow({ where: { id: payload.sub as string } })
    if (!user.mfaSecret) return NextResponse.json({ error: 'MFA not setup' }, { status: 400 })
    const valid = authenticator.check(parsed.data.code, user.mfaSecret)
    if (!valid) return NextResponse.json({ error: 'Invalid code' }, { status: 401 })

    await prisma.user.update({ where: { id: user.id }, data: { mfaEnabled: true } })
    const newAccess = await signAccessToken({ id: user.id, email: user.email, role: user.role }, true)
    const res = NextResponse.json({ ok: true }, { status: 200 })
    res.cookies.set('access_token', newAccess, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 30 })
    logger.info({ event: 'mfa_verify_success', userId: user.id }, 'MFA verified')
    return res
  } catch (e: any) {
    logger.error({ err: e }, 'MFA verify failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}