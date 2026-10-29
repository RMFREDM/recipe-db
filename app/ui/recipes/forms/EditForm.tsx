import useURLRecipe from "@/app/lib/useURLRecipe";
import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";

export default async function EditForm(props: {
	props: { params: Promise<{ id: string }> };
}) {
	// get the recipe being edited
	const [recipe] = await useURLRecipe(props.props);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>Edit {recipe.name}</h1>
			<form className="flex flex-col w-fit gap-5 p-5">
				<RecipeNameInput name={recipe.name} />
				<RecipeIngredientsInput ingredients={recipe.ingredients} />
				<RecipeStepsInput steps={recipe.steps} />
				<button
					type="submit"
					className="bg-gray-300 active:bg-gray-500 border rounded-sm w-fit p-0.25 pr-2 pl-2 m-2"
				>
					Submit
				</button>
			</form>
		</>
	);
}
