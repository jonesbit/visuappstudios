'use server'

import { redirect } from 'next/navigation'
import { createSession } from '@/lib/session'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (email === 'admin@visuapp.com.br' && password === 'admin') {
    await createSession('1')
    redirect('/admin')
  }

  if (email === 'cliente@visuapp.com.br' && password === '123') {
    await createSession('2')
    redirect('/dashboard')
  }

  return { error: 'Credenciais inválidas' }
}