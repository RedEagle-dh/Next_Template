import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default withAuth(
	function middleware(request: NextRequest) {},
	{
		callbacks: {
			authorized: ({ req, token }) => {
                if (req.url.includes("/admin")) {
                    if (token?.role === "ADMIN") {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (token?.role === "ADMIN" || token?.role === "USER" || token?.role === "DEV") {
                        return true;
                    } else {
                        return false;
                    }
                }
			},
		},
		pages: {
			signIn: "/login",
		},
	}
);

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/api/:path*", "/students/:path*", "/groups/:path*", "/admin/:path*"],
};
