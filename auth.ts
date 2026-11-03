import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { fetchUserByEmail } from "./app/lib/data";
import type { User } from "@/app/lib/definitions";

// use bcrypt
const bcrypt = require("bcrypt");

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				// define a zod object for what the credentials should look like
				const parsedCredentials = z
					.object({
						email: z.string().email(),
						password: z.string().min(6),
					})
					.safeParse(credentials);

				if (parsedCredentials.success) {
					// retrieve the email and password from the parsed credentials
					const { email, password } = parsedCredentials.data;

					// get the user based on the email
					const user: User | undefined = await fetchUserByEmail(
						email,
					);
					if (!user) return null;

					// validate the password
					const passwordsMatch = await bcrypt.compare(
						password,
						user.password,
					);
					if (passwordsMatch) return user;
				}
				return null;
			},
		}),
	],
});
