import { cookies } from 'next/headers'

// Configuração centralizada do tempo de sessão (1 hora em milissegundos)
const SESSION_DURATION = 60 * 60 * 1000;

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session')?.value
  
  if (!sessionCookie) return null

  try {
    const session = JSON.parse(sessionCookie)

    // Verificação de segurança extra:
    // Se o cookie existir mas o tempo já passou, invalidamos a sessão forçadamente.
    if (!session.expiresAt || Date.now() > session.expiresAt) {
      await deleteSession()
      return null
    }

    return session
  } catch (error) {
    // Se o JSON estiver corrompido, apaga a sessão
    return null
  }
}

export async function createSession(userId: string, role: string) {
  const cookieStore = await cookies()
  
  const now = Date.now()
  const expiresAt = now + SESSION_DURATION
  const expiresDate = new Date(expiresAt)
  
  const isProduction = process.env.NODE_ENV === 'production';

  // Salvamos o 'expiresAt' dentro do JSON para validação dupla (servidor + navegador)
  cookieStore.set('session', JSON.stringify({ userId, role, expiresAt }), {
    httpOnly: true,
    secure: isProduction, 
    expires: expiresDate, // Isso garante que o navegador mantenha o cookie mesmo fechando a aba, até dar a hora
    sameSite: 'lax',
    path: '/',
    ...(isProduction && { domain: '.visuapp.com.br' })
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  
  // Apaga de todas as formas possíveis para garantir o logout
  cookieStore.delete('session')
  
  // Tenta apagar especificando domínios para evitar cookies "zumbis"
  cookieStore.set('session', '', {
      expires: new Date(0),
      path: '/',
      domain: '.visuapp.com.br' 
  })
}