import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("jwtToken")?.value;
  // Exclude the user route from further redirection
  if (url.pathname.startsWith(`/user`) && token !== undefined) {
    return NextResponse.next(); // Let the user continue to the page
  }
  if (!token) {
    console.log("JWT token is missing");
    return NextResponse.redirect(new URL("/", url.origin));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // Verify the JWT token
    const {payload} = await jwtVerify(token, secret);
    console.log(`Decoded JWT payload: ${JSON.stringify(payload)}`);

    // If user is authenticated, redirect to user profile page
    return NextResponse.redirect(new URL(`/user/${payload.username}`, url.origin));
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/", url.origin));
  }
}

// Apply this middleware to all user routes
export const config = {
  matcher: ["/user/:path*"],
};
