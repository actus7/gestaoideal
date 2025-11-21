import { PrismaAdapter } from "@auth/prisma-adapter";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import authConfig from "./auth.config";
import { UserNotFound } from "./lib/auth";
import { prisma } from "./lib/db";
import { CredentialsSchema } from "./schemas/auth";
import { findUserbyEmail } from "./services";
import { isTwoFactorAutenticationEnabled } from "./services/auth";
import { findOrgByOwnerId } from "./services/onboarding/org";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
	unstable_update: update,
} = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/login",
	},
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const validCredentials = CredentialsSchema.safeParse(credentials);
				if (validCredentials.success) {
					const { email, password } = validCredentials.data;
					const user = await findUserbyEmail(email);
					if (!user || !user.password) {
						throw new UserNotFound();
					}
					const validPassword = await bcryptjs.compare(password, user.password);
					if (validPassword) return user;
				}
				return null;
			},
		}),
	],
	callbacks: {
		async signIn({ user, email, account, profile }) {
			if (user.email) {
				const registeredUser = await findUserbyEmail(user?.email);
				if (!registeredUser?.emailVerified) return false;
			}
			return true;
		},
		async jwt({ token, user, trigger, session }) {
			if (trigger && trigger === "update" && session) {
				token.orgId = session.user.orgId;
				return token;
			}
			if (user) {
				// User is available during sign-in
				if (user.id) {
					const isTwoFactorEnabled = await isTwoFactorAutenticationEnabled(user?.id || "");
					token.isTwoFactorEnabled = isTwoFactorEnabled;
					const org = await findOrgByOwnerId(user.id);
					token.orgId = org?.id || "";
					if (org?.id) {
						token.role = "ADMIN";
					}
				}
			}
			return token;
		},
		async session({ session, token }) {
			// `session.user.role` is now a valid property, and will be type-checked
			// in places like `useSession().data.user` or `auth().user`
			if (session.user && token.sub) {
				session.user.id = token.sub;
				session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
				session.user.orgId = token.orgId;
			}
			return {
				...session,
				user: {
					...session.user,
					role: token.role,
				},
			};
		},
	},
});
