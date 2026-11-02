"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
	// get search parameters from the url so the user can be redirected
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/recipes";
	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined,
	);

	return (
		<div className="flex justify-center">
			<form
				id="login-form"
				action={formAction}
				className="grid grid-cols-1 grid-rows-3 gap-2 w-fit p-1 m-4"
			>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" className="border"></input>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" className="border"></input>
				<input type="hidden" name="redirectTo" value={callbackUrl} />
				<button
					type="submit"
					aria-disabled={isPending}
					className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
				>
					Login
				</button>
				{errorMessage && (
					<p className="text-sm text-red-500">{errorMessage}</p>
				)}
			</form>
		</div>
	);
}
