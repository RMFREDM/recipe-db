import RecipeDetails from "@/app/ui/recipes/RecipeDetails";
import RecipeDetailsSkeleton from "@/app/ui/recipes/RecipeDetailsSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "View Recipe",
};

export default async function page(props: { params: Promise<{ id: string }> }) {
	return (
		<>
			<Suspense fallback={<RecipeDetailsSkeleton />}>
				<RecipeDetails propParams={props} />
			</Suspense>
		</>
	);
}
