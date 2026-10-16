import Link from "next/link";

export default function Home() {
	return (
		<div className="text-center">
			<h1 className="text-4xl p-5">Recipe Database</h1>
			<p className="p-1 m-4">
				<strong>Welcome to Recipe DB!</strong> A site where you can
				create and view a wide range of recipes
			</p>
			<Link
				href="/login"
				id="login-link"
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Log In
			</Link>
		</div>
	);
}
