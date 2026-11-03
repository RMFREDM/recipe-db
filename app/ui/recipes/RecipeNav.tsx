import { signOut } from "@/auth";
import Link from "next/link";

export default function RecipeNav() {
	return (
		<div id="recipe-nav" className="flex justify-evenly w-full h-fit">
			{/* Homepage Link */}
			<Link
				href={"/recipes"}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Recipe List
			</Link>

			{/* Log out button */}
			<form
				action={async () => {
					"use server";
					await signOut({ redirectTo: "/" });
				}}
			>
				<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 cursor-pointer">
					<div className="hidden md:block">Sign Out</div>
				</button>
			</form>
		</div>
	);
}
