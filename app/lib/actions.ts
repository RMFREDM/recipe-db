"use server";

import postgres from "postgres";
import { Recipe } from "./data";
import { z } from "zod";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

/* Recipe Section */

// define a RecipeState type for recipe form errors
export type RecipeState = {
	errors?: {
		name?: string[];
		ingredients?: string[];
		steps?: string[];
		userId?: string[];
	};
	message?: string | null;
};

// define a form format for recipe forms
const RecipeFormSchema = z.object({
	id: z.string(),
	name: z.string().trim().min(1, { error: "Name cannot be empty." }),
	ingredients: z
		.string()
		.trim()
		.min(1, { error: "Ingredients cannot be empty." }),
	steps: z.string().trim().min(1, { error: "Steps cannot be empty." }),
	userId: z
		.string()
		.trim()
		.min(1, { error: "A user must be associated with this recipe." }),
});

// create a function that edits a recipe based on its id
const EditRecipe = RecipeFormSchema.omit({ userId: true });

export async function editRecipe(
	id: string,
	prevState: RecipeState,
	formData: FormData,
) {
	// validate the form data
	const validatedRecipe = EditRecipe.safeParse({
		name: formData.get("name"),
		ingredients: formData.get("ingredients"),
		steps: formData.get("steps"),
	});

	// return errors early if validation fails
	if (!validatedRecipe.success) {
		return {
			errors: validatedRecipe.error.flatten().fieldErrors,
			message: "Failed to update the recipe: field errors",
		};
	}

	const { name, ingredients, steps } = validatedRecipe.data;

	// try to update the recipe
	try {
		await sql`Update recipes SET name=${name}, ingredients=${ingredients}, steps=${steps} WHERE id=${id}`;
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		return { message: "Failed to update the recipe: " + error };
	}
}
