import postgres from "postgres";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// create a function that gets all recipes from the database
export async function fetchRecipes() {
	// define a variable to hold recipes and attempt to fetch them
	let recipes;
	try {
		recipes = await sql`SELECT * FROM recipes`;
	} catch (error) {
		// log the error that occurred
		console.log(error);
		return {
			message: "Database Error: Failed to get recipes",
		};
	}

	// return the recipes
	return {
		recipes: recipes,
	};
}
