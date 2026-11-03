import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import AccountCreationForm from "../ui/create-account/AccountCreationForm";

export const metadata: Metadata = {
	title: "Login",
};

export default function Page() {
	return (
		<>
			<h1
				className={`font-serif text-2xl flex justify-center w-full h-full`}
			>
				Create Your Account
			</h1>
			<p className="flex justify-center">
				Already have an account? Try{" "}
				<Link
					href="/login"
					id="login-link"
					className="text-blue-500 active:text-blue-800 pl-1.5"
				>
					signing in
				</Link>
				!
			</p>
			<Suspense>
				<AccountCreationForm />
			</Suspense>
		</>
	);
}
