import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const host = req.headers.get('host')
  const protocol = req.nextUrl.protocol 

  const sessionCookie = req.cookies.get('session')?.value
  let session = null
  if (sessionCookie) {
    try { session = JSON.parse(sessionCookie) } catch {}
  }

  const isDev = host?.includes('localhost') || host?.includes('.local');
  const baseDomain = isDev ? 'visuapp.local:3000' : 'visuapp.com.br';
  
  const portalUrl = `${protocol}//portal.${baseDomain}`;
  const studioUrl = `${protocol}//studio.${baseDomain}`;

  const isStudio = host?.startsWith('studio');
  
  if (isStudio) {
    if (!session) {
      return NextResponse.redirect(new URL(`${portalUrl}/login`, req.url))
    }
    
    if (session.role !== 'admin') {
      return NextResponse.redirect(new URL(`${portalUrl}/dashboard`, req.url))
    }

    if (path === '/') {
      return NextResponse.rewrite(new URL('/admin/studio', req.url))
    }

    return NextResponse.next()
  }

  if (path === '/login') {
    if (session) {
        if (session.role === 'admin') {
             return NextResponse.redirect(new URL('/admin', req.url))
        }
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  if (path.startsWith('/admin')) {
      if (!session) {
          return NextResponse.redirect(new URL('/login', req.url));
      }

      if (session.role === 'admin') {
          return NextResponse.next();
      } else {
          return NextResponse.redirect(new URL('/dashboard', req.url));
      }
  }

  if (path.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}