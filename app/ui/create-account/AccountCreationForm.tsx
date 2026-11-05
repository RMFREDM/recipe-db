"use client";

import { useActionState, useState } from "react";
import { UserState, createUser } from "@/app/lib/actions";

export default function AccountCreationForm() {
	const initialState: UserState = { message: "", errors: {} };
	const [state, formAction, isPending] = useActionState(
		createUser,
		initialState,
	);

	const [name, setName] = useState("");
	function handleNameChange(newName: string) {
		setName(newName);
	}

	const [email, setEmail] = useState("");
	function handleEmailChange(newEmail: string) {
		setEmail(newEmail);
	}

	const [password, setPassword] = useState("");
	function handlePasswordChange(newPassword: string) {
		setPassword(newPassword);
	}

	return (
		<div className="flex justify-center">
			<form
				id="account-create-form"
				action={formAction}
				className="grid grid-cols-1 grid-rows-3 gap-2 w-fit p-1 m-4"
			>
				<div id="name-section" className="flex flex-col w-50">
					<label htmlFor="username">Name</label>
					<input
						type="text"
						id="username"
						name="name"
						value={name}
						onChange={(e) => {
							e.preventDefault();
							handleNameChange(e.target.value);
						}}
						className="border"
					></input>
					{state.errors?.name &&
						state.errors.name.map((error: string) => (
							<p
								className="mt-2 text-sm text-red-500"
								key={error}
							>
								{error}
							</p>
						))}
				</div>

				<div id="email-section" className="flex flex-col w-50">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => {
							e.preventDefault();
							handleEmailChange(e.target.value);
						}}
						className="border"
					></input>
					{state.errors?.email &&
						state.errors.email.map((error: string) => (
							<p
								className="mt-2 text-sm text-red-500"
								key={error}
							>
								{error}
							</p>
						))}
				</div>

				<div id="email-section" className="flex flex-col w-50">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => {
							e.preventDefault();
							handlePasswordChange(e.target.value);
						}}
						className="border"
					></input>
					{state.errors?.password &&
						state.errors.password.map((error: string) => (
							<p
								className="mt-2 text-sm text-red-500"
								key={error}
							>
								{error}
							</p>
						))}
				</div>

				<button
					type="submit"
					aria-disabled={isPending}
					className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 disabled:cursor-not-allowed"
				>
					Create Account
				</button>
				{state.message && (
					<p className="mt-2 text-sm text-red-500 w-50">
						{state.message}
					</p>
				)}
			</form>
		</div>
	);
}
