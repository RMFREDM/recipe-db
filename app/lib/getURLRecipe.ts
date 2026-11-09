"use server";

import { fetchRecipeById, fetchUserNameById } from "./data";
import { Recipe } from "./definitions";

export default async function getURLRecipe(props: {
	params: Promise<{ id: string }>;
}) {
	// await the url params promise and get the id
	const params = await props.params;
	const id = params.id;

	// identify and return the recipe and its creator
	const recipe = (await fetchRecipeById(id)) as Recipe;
	const creator = await fetchUserNameById(recipe.userid);

	return [recipe, creator];
}
