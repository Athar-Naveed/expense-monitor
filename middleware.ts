import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";
import {cookies} from "next/headers";
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const cookie = cookies();
  const token = cookie.get("jwtToken")?.value;
  console.log(token);
  if (token == undefined) {
    console.log("first");

    return NextResponse.redirect(new URL("/", url.origin));
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decode = await jwtVerify(token, secret);

  return NextResponse.redirect(new URL(`/user/${decode.payload.username}`, url.origin));
}

export const config = {
  matcher: ["/user/:path*"],
};
