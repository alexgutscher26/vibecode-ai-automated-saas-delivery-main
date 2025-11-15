import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'
import type { NextResponse } from 'next/server'

const CSRF_COOKIE = 'csrf_token'

export function issueCsrfToken() {
  const token = randomBytes(16).toString('hex')
  return token
}

export function setCsrfCookie(res: NextResponse, token: string) {
  res.cookies.set(CSRF_COOKIE, token, {
    httpOnly: false,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60,
  })
}

export async function verifyCsrfToken(headerValue?: string) {
  const store = await cookies()
  const cookie = store.get(CSRF_COOKIE)?.value
  return !!cookie && !!headerValue && cookie === headerValue
}