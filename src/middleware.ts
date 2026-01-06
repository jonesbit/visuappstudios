import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Permite que a página de login e arquivos estáticos sejam acessados de qualquer lugar sem reescrita
  if (
    url.pathname.startsWith('/login') || 
    url.pathname.startsWith('/assets') || 
    url.pathname.startsWith('/_next') || 
    url.pathname.includes('favicon.ico')
  ) {
    return NextResponse.next();
  }

  if (hostname === 'admin.visuapp.com.br' || (hostname.includes('admin.') && hostname.includes('localhost'))) {
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === 'portal.visuapp.com.br' || (hostname.includes('portal.') && hostname.includes('localhost'))) {
    url.pathname = `/portal${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};