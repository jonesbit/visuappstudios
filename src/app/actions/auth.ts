'use server'

import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function createSessionAction(uid: string, role: string) {
  // Cria o cookie de sessão no servidor
  await createSession(uid, role)
}

export async function logoutAction() {
  await deleteSession()
  redirect('/login')
}