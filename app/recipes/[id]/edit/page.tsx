import { Recipe } from "@/app/lib/data";
import useURLRecipe from "@/app/lib/useURLRecipe";
import EditForm from "@/app/ui/recipes/forms/EditForm";
import EditFormSkeleton from "@/app/ui/recipes/forms/EditFormSkeleton";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Edit Recipe",
};

export default async function page(props: { params: Promise<{ id: string }> }) {
	// get the recipe being edited NEEDS TO BE MOVED OUT OF THIS COMPONENT
	const recipe: Recipe = (await useURLRecipe(props))[0];
	return (
		<>
			<EditForm recipe={recipe} />
			<Link
				href={"/recipes"}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Back to Recipe List
			</Link>
		</>
	);
}
