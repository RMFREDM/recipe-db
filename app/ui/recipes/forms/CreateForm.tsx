"use client";

import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";
import { RecipeState, createRecipe } from "@/app/lib/actions";
import { useActionState, useState } from "react";

export default function CreateForm() {
	// use state to control the form values
	const [name, setName] = useState("");
	function handleNameChange(newName: string) {
		setName(newName);
	}

	const [ingredients, setIngredients] = useState("");
	function handleIngredientsChange(newIngredients: string) {
		setIngredients(newIngredients);
	}

	const [steps, setSteps] = useState("");
	function handleStepsChange(newSteps: string) {
		setSteps(newSteps);
	}

	// set up the form state and formAction
	const initialState: RecipeState = { message: "", errors: {} };
	const [state, formAction] = useActionState(createRecipe, initialState);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>Create Recipe</h1>
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
					className="bg-gray-300 active:bg-gray-500 border rounded-sm w-fit p-0.25 pr-2 pl-2 m-2 cursor-pointer"
				>
					Submit
				</button>
				{state.message && (
					<p
						className="mt-2 text-sm text-red-500"
						key={state.message}
					>
						{state.message}
					</p>
				)}
			</form>
		</>
	);
}
