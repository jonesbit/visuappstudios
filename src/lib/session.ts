import { cookies } from 'next/headers'

const SESSION_DURATION = 60 * 60 * 1000;

export async function getSession() {
  console.log('Ambiente Atual (NODE_ENV):', process.env.NODE_ENV)

  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session')?.value
  
  if (!sessionCookie) return null

  try {
    const session = JSON.parse(sessionCookie)

    if (!session.expiresAt || Date.now() > session.expiresAt) {
      await deleteSession()
      return null
    }

    return session
  } catch (error) {
    return null
  }
}

export async function createSession(userId: string, role: string) {
  const cookieStore = await cookies()
  
  const now = Date.now()
  const expiresAt = now + SESSION_DURATION
  
  const isProduction = process.env.NODE_ENV === 'production';
  const domain = isProduction ? '.visuapp.com.br' : undefined;

  cookieStore.set('session', JSON.stringify({ userId, role, expiresAt }), {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    ...(domain && { domain })
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  const isProduction = process.env.NODE_ENV === 'production';
  const domain = isProduction ? '.visuapp.com.br' : undefined;

  cookieStore.delete('session')
  cookieStore.set('session', '', {
      expires: new Date(0),
      path: '/',
      ...(domain && { domain })
  })
}