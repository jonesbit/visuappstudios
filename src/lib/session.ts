import { cookies } from 'next/headers'

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null
  return JSON.parse(session)
}

export async function createSession(userId: string, role: string) {
  const cookieStore = await cookies()
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  
  // Em produção usa domínio, em localhost não
  const isProduction = process.env.NODE_ENV === 'production';

  cookieStore.set('session', JSON.stringify({ userId, role }), {
    httpOnly: true,
    secure: isProduction, 
    expires: expires,
    sameSite: 'lax',
    path: '/',
    ...(isProduction && { domain: '.visuapp.com.br' })
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  cookieStore.delete({
    name: 'session',
    domain: '.visuapp.com.br',
    path: '/'
  })
}