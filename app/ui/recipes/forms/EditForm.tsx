import useURLRecipe from "@/app/lib/useURLRecipe";
import RecipeNameInput from "./RecipeNameInput";

export default async function EditForm(props: {
	props: { params: Promise<{ id: string }> };
}) {
	// get the recipe being edited
	const [recipe] = await useURLRecipe(props);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>Edit {recipe.name}</h1>
			<form>
				<RecipeNameInput />
			</form>
		</>
	);
}
