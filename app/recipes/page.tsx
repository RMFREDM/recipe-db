import { Metadata } from "next";
import RecipeList from "../ui/recipes/RecipeList";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Recipes",
};

export default function page() {
	return (
		<>
			<h1 className={`font-serif text-2xl`}>Recipes Page</h1>
			<Suspense>
				<RecipeList />
			</Suspense>
		</>
	);
}
