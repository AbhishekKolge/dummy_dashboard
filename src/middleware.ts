import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse | void {
  const path = request.nextUrl.pathname;

  if (path === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
