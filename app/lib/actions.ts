"use server";

import postgres from "postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { fetchUserByEmail } from "./data";

// define a constant to run sql queries
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// use Bcrypt
const bcrypt = require("bcrypt");

/* Recipe Section */

// define a RecipeState type for recipe form errors
export type RecipeState = {
	errors?: {
		name?: string[] | null;
		ingredients?: string[] | null;
		steps?: string[] | null;
	} | null;
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

// create a function that creates
const CreateRecipe = RecipeFormSchema.omit({ id: true, userId: true });

export async function createRecipe(prevState: RecipeState, formData: FormData) {
	// get the current users id
	const session = await auth();
	const user = await fetchUserByEmail(session?.user?.email as string);
	if (!user) {
		return {
			message:
				"Failed to create the recipe: a user must be associated with this recipe.",
		};
	}
	const userId = user.id;

	// validate the form data
	const validatedRecipe = CreateRecipe.safeParse({
		name: formData.get("name"),
		ingredients: formData.get("ingredients"),
		steps: formData.get("steps"),
	});

	// return errors early if validation fails
	if (!validatedRecipe.success) {
		return {
			errors: validatedRecipe.error.flatten().fieldErrors,
			message: "Failed to create the recipe: field errors",
		};
	}

	const { name, ingredients, steps } = validatedRecipe.data;

	// try to create the recipe
	try {
		await sql`Insert INTO recipes (name, ingredients, steps, userid)
		VALUES (${name}, ${ingredients}, ${steps}, ${userId})`;
		console.log(`Created Recipe: ${name}`);
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		return { message: "Failed to create the recipe: " + error };
	}

	// redirect the user to the recipes list
	revalidatePath(`/recipes`);
	redirect(`/recipes`);
}

// create a function that edits a recipe based on its id
const EditRecipe = RecipeFormSchema.omit({ id: true, userId: true });

export async function editRecipe(
	id: string,
	prevState: RecipeState,
	formData: FormData,
) {
	console.log(
		"formData: " +
			formData.get("name") +
			", " +
			formData.get("ingredients") +
			", " +
			formData.get("steps"),
	);
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

	// redirect the user to the recipes page
	revalidatePath(`/recipes/${id}`);
	redirect(`/recipes/${id}`);
}

/* Users section */

// define a UserState type for user form errors
export type UserState = {
	errors?: {
		name?: string[] | null;
		email?: string[] | null;
		password?: string[] | null;
	} | null;
	message?: string | null;
};

// define a form format for user forms
const UserFormSchema = z.object({
	id: z.string(),
	name: z
		.string({ error: "Name cannot be empty." })
		.trim()
		.min(1, { error: "Name cannot be empty." }),
	email: z.string().trim().min(1, { error: "Email cannot be empty." }),
	password: z
		.string()
		.trim()
		.min(6, { error: "Password must contain at least 6 characters." }),
});

// create a function that edits a recipe based on its id
const CreateUser = UserFormSchema.omit({ id: true });

export async function createUser(prevState: RecipeState, formData: FormData) {
	// validate the form data
	const validatedRecipe = CreateUser.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	// return errors early if validation fails
	if (!validatedRecipe.success) {
		return {
			errors: validatedRecipe.error.flatten().fieldErrors,
			message: "Failed to create the user: field errors",
		};
	}

	// retrieve the form data and hash the password
	const { name, email, password } = validatedRecipe.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	console.log(`Name: ${name} Email: ${email}`);

	// try to create the user
	try {
		await sql`INSERT INTO users (name, email, password)
		VALUES (${name}, ${email}, ${hashedPassword})`;
		console.log(`Created user: ${name}`);
	} catch (error) {
		// log and throw the error that occurred
		console.log(error);
		return { message: "Failed to create the user: " + error };
	}

	// redirect the user to the login page
	revalidatePath(`/login`);
	redirect(`/login`);
}

/* Authentication Section */

// define a function to authenticate the user
export async function authenticate(
	prevState: string | undefined,
	formData: FormData,
) {
	try {
		await signIn("credentials", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return "Invalid credentials.";
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}
