import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { logger } from '@/lib/logger'

const Schema = z.object({ token: z.string().min(16), password: z.string().min(8) })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = Schema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    const { token, password } = parsed.data

    const candidates = await prisma.passwordResetToken.findMany({ where: { usedAt: null, expiresAt: { gt: new Date() } } })
    let match: typeof candidates[number] | null = null
    for (const c of candidates) {
      if (await bcrypt.compare(token, c.tokenHash)) { match = c; break }
    }
    if (!match) return NextResponse.json({ error: 'Invalid token' }, { status: 400 })

    const hash = await bcrypt.hash(password, 10)
    await prisma.user.update({ where: { id: match.userId }, data: { passwordHash: hash } })
    await prisma.passwordResetToken.update({ where: { id: match.id }, data: { usedAt: new Date() } })
    // revoke all refresh tokens
    await prisma.refreshToken.updateMany({ where: { userId: match.userId }, data: { revokedAt: new Date() } })
    logger.info({ event: 'password_reset_success', userId: match.userId }, 'Password reset')
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e: any) {
    logger.error({ err: e }, 'Password reset failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}