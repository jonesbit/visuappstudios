import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/session'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const session = await getSession()

  if (!session && (path.startsWith('/admin') || path.startsWith('/dashboard'))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (session?.role !== 'admin' && path.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
}