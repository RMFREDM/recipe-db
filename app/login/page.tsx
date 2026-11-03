import { Metadata } from "next";
import LoginForm from "../ui/login/LoginForm";
import { Suspense } from "react";

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
		</>
	);
}
