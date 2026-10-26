import { fetchRecipeById } from "@/app/lib/data";
import RecipeDetails from "@/app/ui/recipes/RecipeDetails";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "View Recipe",
};

export default async function page(props: { params: Promise<{ id: string }> }) {
	return (
		<>
			<Suspense>
				<RecipeDetails propParams={props} />
			</Suspense>
		</>
	);
}
