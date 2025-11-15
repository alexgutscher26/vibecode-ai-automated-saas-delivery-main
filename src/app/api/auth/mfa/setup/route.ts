import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'
import { cookies } from 'next/headers'
import { verifyAccessToken } from '@/lib/auth'
import { authenticator } from 'otplib'

/**
 * Handles the POST request for setting up multi-factor authentication (MFA).
 *
 * This function retrieves the access token from cookies and verifies it. If the token is valid, it generates a TOTP secret and updates the user's MFA method in the database. It logs the initiation of the MFA setup and returns the OTP authentication URI. If any step fails, it returns an appropriate error response.
 *
 * @returns A JSON response containing the OTP authentication URI or an error message.
 * @throws Error If there is a server error during the process.
 */
export async function POST() {
  try {
    const access = cookies().get('access_token')?.value
    if (!access) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const payload = await verifyAccessToken(access).catch(() => null)
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const userId = payload.sub as string
    const secret = authenticator.generateSecret()
    const otpauth = authenticator.keyuri(payload.email as string, 'VibeCode', secret)
    await prisma.user.update({ where: { id: userId }, data: { mfaMethod: 'totp', mfaSecret: secret } })
    logger.info({ event: 'mfa_setup_start', userId }, 'MFA setup initiated')
    return NextResponse.json({ otpauth }, { status: 200 })
  } catch (e: any) {
    logger.error({ err: e }, 'MFA setup failed')
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}