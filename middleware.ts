import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  const data = request.body;

  console.log(`data: ${data}`);
  const url = request.nextUrl.clone();

  console.log(`url: ${url}`);
  url.pathname = "/";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/user/:path*"],
};
