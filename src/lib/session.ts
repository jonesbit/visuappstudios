import { cookies } from 'next/headers'

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null
  return JSON.parse(session)
}

export async function createSession(userId: string) {
  const cookieStore = await cookies()
  const role = userId === '1' ? 'admin' : 'user'
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  
  cookieStore.set('session', JSON.stringify({ userId, role }), {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
    domain: '.visuapp.com.br' 
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete({
    name: 'session',
    domain: '.visuapp.com.br',
    path: '/'
  })
}