import { Recipe } from "@/app/lib/definitions";
import useURLRecipe from "@/app/lib/useURLRecipe";
import useUserId from "@/app/lib/useUserId";
import EditForm from "@/app/ui/recipes/forms/EditForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Edit Recipe",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
	// get the recipe being edited NEEDS TO BE MOVED OUT OF THIS COMPONENT
	const recipe: Recipe = (await useURLRecipe(props))[0];

	// redirect the user if they didn't create this recipe
	const userId = await useUserId();
	if (userId != recipe.userid) {
		redirect(`/recipes/${recipe.id}`);
	}

	return <EditForm recipe={recipe} />;
}
