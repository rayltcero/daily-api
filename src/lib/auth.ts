import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prismaClient } from "./prisma";
import type { User } from "@prisma/client";

// Create a new instance of Lucia
const adapter = new PrismaAdapter(prismaClient.session, prismaClient.user);

const lucia = new Lucia(adapter, {
    sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	},
    getUserAttributes: attributes => {
        return {
            name: attributes.username
        }
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    username: string;
}

export { lucia };
