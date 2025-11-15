import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'
import { rateLimit } from '@/lib/rate-limit'
import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'

const Schema = z.object({ email: z.string().email() })

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    const rl = rateLimit(`pwreset:${ip}`, 5, 10 * 60 * 1000)
    if (!rl.allowed) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

    const body = await req.json()
    const parsed = Schema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

    const { email } = parsed.data
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      // do not reveal existence
      return NextResponse.json({ ok: true }, { status: 200 })
    }
    const raw = randomBytes(32).toString('hex')
    const tokenHash = await bcrypt.hash(raw, 10)
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)
    await prisma.passwordResetToken.create({ data: { userId: user.id, tokenHash, expiresAt } })
    // TODO: send email via nodemailer; for now log
    logger.info({ event: 'password_reset_requested', email, tokenPreview: raw.slice(0, 6) + '…' }, 'Password reset requested')
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e: any) {
    logger.error({ err: e }, 'Password reset request failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}