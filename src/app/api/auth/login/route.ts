import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { signAccessToken, generateRefreshToken, hashToken } from '@/lib/auth'
import { issueCsrfToken, setCsrfCookie } from '@/lib/csrf'
import { logger } from '@/lib/logger'
import { rateLimit } from '@/lib/rate-limit'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    const rl = rateLimit(`login:${ip}`, 10, 60 * 1000)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await req.json()
    const parsed = LoginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', details: parsed.error.format() }, { status: 400 })
    }
    const { email, password } = parsed.data
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !user.passwordHash) {
      logger.warn({ event: 'login_failed', email }, 'Invalid credentials')
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) {
      logger.warn({ event: 'login_failed', email }, 'Invalid credentials')
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (user.mfaEnabled) {
      // create MFA ticket in VerificationToken
      const ticket = await prisma.verificationToken.create({
        data: {
          userId: user.id,
          tokenHash: 'mfa-ticket',
          expiresAt: new Date(Date.now() + 5 * 60 * 1000),
          kind: 'mfa_ticket',
        },
      })
      return NextResponse.json({ requiresMfa: true, ticketId: ticket.id }, { status: 200 })
    }

    const access = await signAccessToken({ id: user.id, email: user.email, role: user.role }, true)
    const rawRefresh = generateRefreshToken()
    const tokenHash = await hashToken(rawRefresh)
    const rt = await prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    })

    const res = NextResponse.json({ ok: true }, { status: 200 })
    res.cookies.set('access_token', access, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 30 })
    res.cookies.set('refresh_token', `${rt.id}:${rawRefresh}`, { httpOnly: true, secure: true, sameSite: 'strict', path: '/api/auth/refresh', maxAge: 60 * 60 * 24 * 7 })
    const csrf = issueCsrfToken()
    setCsrfCookie(res, csrf)
    logger.info({ event: 'login_success', userId: user.id, email }, 'User logged in')
    return res
  } catch (e: any) {
    logger.error({ err: e }, 'Login failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}