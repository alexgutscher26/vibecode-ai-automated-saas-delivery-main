import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'
import type { User } from '@prisma/client'

const ISSUER = 'vibecode-auth'
const AUDIENCE = 'vibecode-app'

function getSecret() {
  const secret = process.env.AUTH_SECRET || 'dev-secret-change-me'
  return new TextEncoder().encode(secret)
}

export async function signAccessToken(user: Pick<User, 'id' | 'email' | 'role'>, mfaPassed = true) {
  const now = Math.floor(Date.now() / 1000)
  return await new SignJWT({
    sub: user.id,
    email: user.email,
    role: user.role,
    mfaPassed,
    iat: now,
  })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime('30m')
    .sign(getSecret())
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret(), {
    issuer: ISSUER,
    audience: AUDIENCE,
  })
  return payload as any
}

export function generateRefreshToken() {
  return randomBytes(32).toString('hex')
}

export async function hashToken(token: string) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(token, salt)
}

export async function compareToken(token: string, hash: string) {
  return bcrypt.compare(token, hash)
}

export type CookieOptions = {
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  path?: string
  maxAge?: number
}

export async function setCookie(name: string, value: string, opts: CookieOptions = {}) {
  const store = await cookies()
  store.set(name, value, {
    httpOnly: opts.httpOnly ?? true,
    secure: opts.secure ?? true,
    sameSite: opts.sameSite ?? 'strict',
    path: opts.path ?? '/',
    maxAge: opts.maxAge,
  })
}

export async function deleteCookie(name: string, path: string = '/') {
  const store = await cookies()
  store.set(name, '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path,
    maxAge: 0,
  })
}