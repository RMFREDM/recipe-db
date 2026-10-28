import postgres from "postgres";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

/* Recipe Section */

// define a recipe type
export type Recipe = {
	id: string;
	name: string;
	ingredients: string;
	steps: string;
	userid: string;
};

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
		throw new Error("Failed to fetch recipes: " + error);
	}
}

// create a function that gets one recipe from the database based on its id
export async function fetchRecipeById(id: string) {
	// define a variable to hold recipes and attempt to fetch them
	let recipe;
	try {
		recipe = await sql`SELECT * FROM recipes where id=${id}`;

		// return the recipe
		return recipe[0];
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		throw new Error("Failed to fetch the recipe: " + error);
	}
}

/* Users Section */

// create a function that gets a user from the database based on its id
export async function fetchUserNameById(id: string) {
	// define a variable to hold recipes and attempt to fetch them
	let user;
	try {
		user = await sql`SELECT name FROM users where id=${id}`;

		// return the user's name
		return user[0].name;
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		throw new Error("Failed to fetch the user: " + error);
	}
}
