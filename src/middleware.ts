import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/session'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const host = req.headers.get('host')
  const session = await getSession()

  const isPortal = host?.startsWith('portal')
  const isStudio = host?.startsWith('studio')
  const isLocalhost = host?.includes('localhost')

  if (isStudio) {
    if (!session) {
      return NextResponse.redirect(new URL('https://portal.visuapp.com.br/login', req.url))
    }
    
    if (session.role !== 'admin') {
      return NextResponse.redirect(new URL('https://portal.visuapp.com.br/dashboard', req.url))
    }

    if (path === '/') {
      return NextResponse.rewrite(new URL('/admin/studio', req.url))
    }

    return NextResponse.next()
  }

  if (path === '/login') {
    if (!isPortal && !isLocalhost) {
       return NextResponse.redirect(new URL('https://portal.visuapp.com.br/login'))
    }
  }

  if (isPortal && path === '/') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (!session && (path.startsWith('/admin') || path.startsWith('/dashboard'))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (session?.role !== 'admin' && path.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}