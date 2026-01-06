import { cookies } from 'next/headers'

// Configuração de segurança interna (1 hora)
const SESSION_DURATION = 60 * 60 * 1000;

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session')?.value
  
  if (!sessionCookie) return null

  try {
    const session = JSON.parse(sessionCookie)

    // Verifica se o tempo limite de 1h estourou, independente da aba estar aberta ou não
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
  // Define o limite rígido de 1h para validação interna
  const expiresAt = now + SESSION_DURATION
  
  const isProduction = process.env.NODE_ENV === 'production';

  cookieStore.set('session', JSON.stringify({ userId, role, expiresAt }), {
    httpOnly: true,
    secure: isProduction,
    // REMOVIDO 'expires': Isso torna o cookie de sessão (expira ao fechar o navegador)
    sameSite: 'lax',
    path: '/',
    ...(isProduction && { domain: '.visuapp.com.br' })
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  cookieStore.set('session', '', {
      expires: new Date(0), // Força expiração imediata
      path: '/',
      domain: '.visuapp.com.br' 
  })
}