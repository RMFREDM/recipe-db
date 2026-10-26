import postgres from "postgres";
import { setTimeout } from "timers/promises";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// create a function that gets all recipes from the database
export async function fetchRecipes() {
	// define a variable to hold recipes and attempt to fetch them
	let recipes;
	try {
		recipes = await sql`SELECT * FROM recipes`;

		// return the recipes
		return recipes;
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		throw new Error("failed to fetch recipes: " + error);
	}
}
