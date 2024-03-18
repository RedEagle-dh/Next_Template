import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

export default withAuth(function middleware(_: NextRequest) {}, {
    callbacks: {
        authorized: ({ req, token }) => {
            // Check if the user is authorized
            return true;
        },
    },
    pages: {
        signIn: "/login",
    },
});

export const config = {
    matcher: [],
};
