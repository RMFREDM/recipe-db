"use client";

import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";
import { RecipeState, editRecipe } from "@/app/lib/actions";
import { useActionState, useState } from "react";
import { Recipe } from "@/app/lib/data";

export default function EditForm(props: { recipe: Recipe }) {
	// get the recipe out of the props and use state to control the form values
	const recipe: Recipe = props.recipe;

	const [name, setName] = useState(recipe.name);
	function handleNameChange(newName: string) {
		setName(newName);
	}

	const [ingredients, setIngredients] = useState(recipe.ingredients);
	function handleIngredientsChange(newIngredients: string) {
		setIngredients(newIngredients);
	}

	const [steps, setSteps] = useState(recipe.steps);
	function handleStepsChange(newSteps: string) {
		setSteps(newSteps);
	}

	// bind the editRecipe function with the id and set up the form state
	const editRecipeWithId = editRecipe.bind(null, recipe.id);
	const initialState: RecipeState = { message: null, errors: {} };
	const [state, formAction] = useActionState(editRecipeWithId, initialState);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>Edit {recipe.name}</h1>
			<form action={formAction} className="flex flex-col w-fit gap-5 p-5">
				<RecipeNameInput name={name} handleChange={handleNameChange} />
				{state.errors?.name &&
					state.errors.name.map((error: string) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
				<RecipeIngredientsInput
					ingredients={ingredients}
					handleChange={handleIngredientsChange}
				/>
				{state.errors?.ingredients &&
					state.errors.ingredients.map((error: string) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
				<RecipeStepsInput
					steps={steps}
					handleChange={handleStepsChange}
				/>
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
