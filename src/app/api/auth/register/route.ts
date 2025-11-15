import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { signAccessToken, generateRefreshToken, hashToken } from '@/lib/auth'
import { issueCsrfToken, setCsrfCookie } from '@/lib/csrf'
import { logger } from '@/lib/logger'

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string().max(80).optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = RegisterSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', details: parsed.error.format() }, { status: 400 })
    }
    const { email, password, displayName } = parsed.data
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, passwordHash, displayName } })

    const access = await signAccessToken({ id: user.id, email: user.email, role: user.role })
    const rawRefresh = generateRefreshToken()
    const tokenHash = await hashToken(rawRefresh)
    const rt = await prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    })

    const res = NextResponse.json({ user: { id: user.id, email: user.email, displayName: user.displayName } }, { status: 201 })
    // cookies
    res.cookies.set('access_token', access, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 30 })
    res.cookies.set('refresh_token', `${rt.id}:${rawRefresh}`, { httpOnly: true, secure: true, sameSite: 'strict', path: '/api/auth/refresh', maxAge: 60 * 60 * 24 * 7 })
    // CSRF for double-submit
    const csrf = issueCsrfToken()
    setCsrfCookie(res, csrf)
    logger.info({ event: 'register', userId: user.id, email }, 'User registered')
    return res
  } catch (e: any) {
    logger.error({ err: e }, 'Register failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}