import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { prisma } from '@/lib/db'
import { betterAuthInstance as auth } from '@/lib/better-auth'
import { verifyAccessToken } from '@/lib/auth'

export async function GET() {
  try {
    // Try Better Auth session first
    const sess = await auth.api.getSession({ headers: await headers() })
    if (sess) {
      const email = sess.user.email
      const dbUser = email ? await prisma.user.findUnique({ where: { email } }) : null
      return NextResponse.json({
        source: 'better-auth',
        session: sess,
        user: dbUser ? {
          id: dbUser.id,
          email: dbUser.email,
          displayName: dbUser.displayName,
          role: dbUser.role,
          mfaEnabled: dbUser.mfaEnabled,
        } : null,
      })
    }

    // Fallback to our JWT cookie
    const store = await cookies()
    const access = store.get('access_token')?.value
    if (access) {
      const payload = await verifyAccessToken(access).catch(() => null)
      if (payload?.sub) {
        const dbUser = await prisma.user.findUnique({ where: { id: String(payload.sub) } })
        if (dbUser) {
          return NextResponse.json({
            source: 'jwt',
            session: null,
            user: {
              id: dbUser.id,
              email: dbUser.email,
              displayName: dbUser.displayName,
              role: dbUser.role,
              mfaEnabled: dbUser.mfaEnabled,
            },
          })
        }
      }
    }
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 })
  } catch (e: any) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}