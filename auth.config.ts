import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CredentialsSchema } from "./schemas/auth";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
