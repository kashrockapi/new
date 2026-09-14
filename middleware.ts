import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

/** Strip crawler-glued markdown `).` leftovers (e.g. `/pricing).` from `](url).`). */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.endsWith(").")) {
    return NextResponse.next()
  }
  const url = request.nextUrl.clone()
  url.pathname = pathname.slice(0, -2) || "/"
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|map|txt|xml|json)$).*)",
  ],
}
