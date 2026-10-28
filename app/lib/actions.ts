import postgres from "postgres";
import { Recipe } from "./data";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

/* Recipe Section */

// create a function that edits a recipe based on its id
export async function editRecipe(recipe: Recipe) {
	// define a variable to hold recipes and attempt to fetch them
	try {
		await sql`Update recipes SET name=${recipe.name}, ingredients=${recipe.ingredients}, steps=${recipe.steps} WHERE id=${recipe.id}`;
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		throw new Error("Failed to update the recipe: " + error);
	}
}
