"use client";

import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";
import { RecipeState, editRecipe } from "@/app/lib/actions";
import { useActionState } from "react";
import { Recipe } from "@/app/lib/data";

export default function EditForm(props: { recipe: Recipe }) {
	// get the recipe out of the props
	const recipe: Recipe = props.recipe;

	// bind the editRecipe function with the id and set up the form state
	const editRecipeWithId = editRecipe.bind(null, recipe.id);
	const initialState: RecipeState = { message: null, errors: {} };
	const [state, formAction] = useActionState(editRecipeWithId, initialState);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>Edit {recipe.name}</h1>
			<form action={formAction} className="flex flex-col w-fit gap-5 p-5">
				<RecipeNameInput name={recipe.name} />
				{state.errors?.name &&
					state.errors.name.map((error: string) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
				<RecipeIngredientsInput ingredients={recipe.ingredients} />
				{state.errors?.ingredients &&
					state.errors.ingredients.map((error: string) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
				<RecipeStepsInput steps={recipe.steps} />
				{state.errors?.steps &&
					state.errors.steps.map((error: string) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
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
