import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";

export default function EditFormSkeleton() {
	return (
		<>
			<h1 className={`font-serif text-2xl`}>Loading Recipe</h1>
			<form className="flex flex-col w-fit gap-5 p-5 animate-pulse">
				<RecipeNameInput name="loading name" />
				<RecipeIngredientsInput ingredients="loading ingredients" />
				<RecipeStepsInput steps="loading steps" />
				<button className="bg-gray-300 active:bg-gray-500 border rounded-sm w-fit p-0.25 pr-2 pl-2 m-2">
					Loading
				</button>
			</form>
		</>
	);
}
