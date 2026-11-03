import { Recipe } from "@/app/lib/data";
import useURLRecipe from "@/app/lib/useURLRecipe";
import EditForm from "@/app/ui/recipes/forms/EditForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Edit Recipe",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
	// get the recipe being edited NEEDS TO BE MOVED OUT OF THIS COMPONENT
	const recipe: Recipe = (await useURLRecipe(props))[0];
	return (
		<>
			<EditForm recipe={recipe} />
		</>
	);
}
