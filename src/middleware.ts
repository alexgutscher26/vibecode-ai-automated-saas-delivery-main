import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { getSessionCookie } from 'better-auth/cookies'

const PROTECTED = ['/dashboard']

function isProtected(pathname: string) {
  return PROTECTED.some((p) => pathname.startsWith(p))
}

function getSecret() {
  const secret = process.env.AUTH_SECRET || 'dev-secret-change-me'
  return new TextEncoder().encode(secret)
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!isProtected(pathname)) return NextResponse.next()

  const access = req.cookies.get('access_token')?.value
  const hasBetterAuthSession = !!getSessionCookie(req)
  if (!access && !hasBetterAuthSession) {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  try {
    if (access) {
      await jwtVerify(access, getSecret(), { issuer: 'vibecode-auth', audience: 'vibecode-app' })
    }
    return NextResponse.next()
  } catch {
    const url = new URL('/login', req.url)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}