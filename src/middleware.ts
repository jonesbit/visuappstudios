import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  const currentHost = hostname.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, '');

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