## Overview
- Stack: Next.js (App Router) with server Route Handlers for auth APIs, Prisma + PostgreSQL for persistence, `bcrypt` for hashing, `jose` for JWT, `zod` for validation, `pino` for logging.
- OAuth: Use Auth.js/NextAuth providers (Google, GitHub, Facebook) for social sign-in; after callback, issue our own access/refresh tokens and bind provider accounts to users.
- MFA: Start with TOTP (authenticator apps) via `otplib`; pluggable SMS (Twilio) and email OTP via SMTP.
- Token model: 30 min access JWT (stateless), 7 day refresh token (rotated, hashed, stored, revocable) in `HttpOnly` secure cookie.

## Data Model (Prisma)
- `User`: id, email (unique), passwordHash (nullable), displayName, role (`user|admin`), mfaEnabled, mfaMethod, createdAt/updatedAt.
- `OAuthAccount`: id, userId, provider (`google|github|facebook`), providerAccountId, profile data.
- `RefreshToken`: id, userId, tokenHash, expiresAt, revokedAt, userAgent, ip.
- `PasswordResetToken`: id, userId, tokenHash, expiresAt, usedAt.
- `VerificationToken` (for email verification / CSRF issuance if needed): tokenHash, userId, expiresAt.

## Security & Tokens
- Access JWT: 30 minutes, claims: `sub`, `email`, `role`, `mfaPassed`, `iat`, `exp`; signed with `jose` HS256 using `AUTH_SECRET`.
- Refresh token: random 256-bit string, hashed with `bcrypt`, stored; rotation on each refresh; revoke on logout/password change.
- Cookies: `refresh_token` (`HttpOnly`, `Secure`, `SameSite=strict`, `Path:/api/auth/refresh`), optional `csrf_token` for double-submit.
- CSRF: Double-submit cookie + `X-CSRF-Token` header for state-changing endpoints that rely on cookies (e.g., refresh, logout, password reset).
- Rate limiting: per IP and per identifier (email) using Redis-backed limiter (fallback in-memory for dev). Strict limits on `/api/auth/login`, `/api/auth/password/request-reset`, `/api/auth/refresh`.

## API Endpoints (Route Handlers)
- `POST /api/auth/register`: email, password; validate, hash, create user; send verification email (optional) and return tokens.
- `POST /api/auth/login`: email, password; rate limit; verify hash; if MFA enabled, return `requiresMfa` and `mfaTicket`; else issue tokens.
- `POST /api/auth/mfa/verify`: ticket + code; verify TOTP/SMS/email; issue tokens.
- `POST /api/auth/mfa/setup`: auth required; create TOTP secret, return otpauth URI + QR; confirm with first code; set `mfaEnabled`.
- `POST /api/auth/mfa/disable`: auth required; verify password or recent code; disable MFA.
- `POST /api/auth/refresh`: reads `refresh_token` cookie; rotate token; returns new access JWT.
- `POST /api/auth/logout`: revoke current refresh token and clear cookie.
- `POST /api/auth/password/request-reset`: email; rate limit; create time-limited token; send email.
- `POST /api/auth/password/reset`: token + new password; verify token; update password hash; revoke all refresh tokens.
- OAuth via Auth.js/NextAuth:
  - Providers: Google, GitHub, Facebook under `/api/auth/*` (Auth.js routes).
  - On successful OAuth callback: upsert `User`, link `OAuthAccount`, then create our refresh token + access JWT and set cookie.

## Middleware & RBAC
- `src/middleware.ts`: protect `/dashboard/**` and private APIs by verifying access JWT; if missing/expired, redirect to login; if `mfaEnabled` and `mfaPassed=false`, redirect to MFA step.
- Role-based access: enforce roles via helper `requireRole('admin')` in route handlers; include `role` in JWT claims.

## Validation & Errors
- `zod` schemas for all request bodies and query params; return 400 with standardized error structure on validation failure.
- Central error utility: map known errors (auth, rate limit, CSRF, validation) to 4xx; unexpected errors to 5xx with correlation id.
- Logging: `pino` for structured logs; log request id, user id, IP, UA, and event (login success/failure, refresh, reset).

## Frontend Integration
- Update `src/components/login-form.tsx`: form submit to `/api/auth/login`; handle MFA challenge flow; show provider buttons using Auth.js `signIn('google'|'github'|'facebook')`.
- Post-auth redirect to `/dashboard`; rely on middleware for protection.
- Add MFA setup UI (QR code display, code input) under `src/app/dashboard/settings`.
- Use `fetch` with `Authorization: Bearer <access>` for API calls; automatic silent refresh via refresh endpoint when 401 occurs.

## Testing
- Unit tests (Vitest): hashing utils, JWT helpers, rate limiter, CSRF validation, zod schemas.
- Integration tests: Next.js route handlers with test server; cover register/login/mfa/refresh/logout/password-reset; mock email/SMS.
- E2E (Playwright): full flows including OAuth (use provider test app credentials), MFA setup/verify, password reset.
- Security tests: static analysis (eslint security rules), dependency audit; dynamic scans with OWASP ZAP baseline against local server.
- Load testing: Artillery or k6 scripts targeting login and refresh endpoints (RPS, latency, error rate).

## Configuration
- `.env`: `DATABASE_URL`, `AUTH_SECRET`, `NEXTAUTH_URL`, `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID/SECRET`, `FACEBOOK_CLIENT_ID/SECRET`, `SMTP_HOST/USER/PASS`, `TWILIO_ACCOUNT_SID/AUTH_TOKEN/PHONE`, `RATE_LIMIT_REDIS_URL`.

## Documentation
- API docs: endpoint descriptions, request/response schemas, status codes, example curl.
- Client guide: how to call login/MFA/refresh, storing tokens, middleware behavior.
- Security practices: password hashing, token rotation, CSRF model, rate limits, secret management, logging/PII.

## Milestones
1) Dependencies + Prisma schema + migrations.
2) Email/password login + JWT/refresh + CSRF + rate limiting.
3) OAuth providers with post-callback token issuance.
4) MFA (TOTP) setup/verify + UI.
5) Password reset flow.
6) Middleware & RBAC across dashboard.
7) Tests (unit/integration/E2E, security, load).
8) Documentation and environment setup guide.