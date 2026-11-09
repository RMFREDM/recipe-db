import Link from "next/link";
import ProfileDisplay from "../profile/ProfileDisplay";
import { Suspense } from "react";

export default async function RecipeNav() {
	return (
		<div id="recipe-nav" className="flex justify-evenly w-full h-fit">
			{/* Homepage Link */}
			<Link
				href={"/recipes"}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Recipe List
			</Link>

			<Suspense>
				<ProfileDisplay />
			</Suspense>
		</div>
	);
}
