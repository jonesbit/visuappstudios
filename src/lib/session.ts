import { cookies } from 'next/headers'

const SESSION_DURATION = 60 * 60 * 1000;

export async function getSession() {
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
  
  // Lógica: Se NÃO for localhost, força o domínio .visuapp.com.br
  // Isso garante que funcione em Production e Preview da Vercel
  const isLocalhost = process.env.NODE_ENV === 'development'; 
  const domain = isLocalhost ? undefined : '.visuapp.com.br';

  cookieStore.set('session', JSON.stringify({ userId, role, expiresAt }), {
    httpOnly: true,
    secure: !isLocalhost,
    sameSite: 'lax',
    path: '/',
    ...(domain && { domain })
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  
  const isLocalhost = process.env.NODE_ENV === 'development'; 
  const domain = isLocalhost ? undefined : '.visuapp.com.br';

  // Tenta deletar nos dois escopos para garantir
  cookieStore.delete('session')
  
  cookieStore.set('session', '', {
      expires: new Date(0),
      path: '/',
      ...(domain && { domain })
  })
}