import { Metadata } from "next";
import RecipeList from "../ui/recipes/RecipeList";
import { Suspense } from "react";
import RecipeListSkeleton from "../ui/recipes/RecipeListSkeleton";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Recipes",
};

export default function page() {
	return (
		<>
			<h1 className={`font-serif text-2xl mb-2`}>Recipes Page</h1>
			<Link
				href={`/recipes/create`}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm py-1 pr-2 pl-2 m-2"
			>
				Create New Recipe
			</Link>
			<Suspense fallback={<RecipeListSkeleton />}>
				<RecipeList />
			</Suspense>
		</>
	);
}
