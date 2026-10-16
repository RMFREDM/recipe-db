import { Metadata } from "next";
import LoginForm from "../ui/login/LoginForm";

export const metadata: Metadata = {
	title: "Login",
};

export default function page() {
	return (
		<>
			<h1 className="flex justify-center w-full h-full">Login Page</h1>
			<LoginForm />
		</>
	);
}
