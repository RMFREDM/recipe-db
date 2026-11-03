"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";

export default function AccountCreationForm() {
	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined,
	);

	return (
		<div className="flex justify-center">
			<form
				id="account-create-form"
				className="grid grid-cols-1 grid-rows-3 gap-2 w-fit p-1 m-4"
			>
				<label htmlFor="username">Name</label>
				<input
					type="text"
					id="username"
					name="username"
					className="border"
				></input>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					className="border"
				></input>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					className="border"
				></input>

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
