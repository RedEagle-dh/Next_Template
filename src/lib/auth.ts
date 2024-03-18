import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            authorize: async (credentials) => {
                // Fetch user from e.g. the database
                return {
                    id: 1,
                    name: "Test User",
                    role: "ADMIN",
                } as any;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.name;
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            session.accessToken = token.accessToken;
            if (session.user) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        },
    },
    events: {
        signIn: async ({ user, account, profile }) => {
            console.log(`User ${user.name} signed in and he is a ${user.role}`);
        },
    },
};
