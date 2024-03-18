import type { User } from "next-auth";
import "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
        accessToken: string;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            role: string;
        };
        accessToken: string;
    }

    interface User {
        id: string;
        role: string;
    }
}
