import { Metadata } from "next";
import LoginForm from "../ui/login/LoginForm";
import { Suspense } from "react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login",
};

export default function Page() {
	return (
		<>
			<h1
				className={`font-serif text-2xl flex justify-center w-full h-full`}
			>
				Login Page
			</h1>
			<Suspense>
				<LoginForm />
			</Suspense>
			<p className="flex justify-center">
				Don't have an account? Try{" "}
				<Link
					href="/create-account"
					id="account-creation-link"
					className="text-blue-500 active:text-blue-800 pl-1.5"
				>
					creating an account
				</Link>
				!
			</p>
		</>
	);
}
