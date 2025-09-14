import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // read pathname from Next.js URL helper
    const pathname = request.nextUrl.pathname;

    // clone and mutate request headers (this passes to the downstream request)
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);

    // hand off to the next handler with your custom header
    return NextResponse.next({
        request: { headers: requestHeaders },
    });
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/about'],
}