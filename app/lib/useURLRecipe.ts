import { fetchRecipeById, fetchUserNameById } from "./data";

export default async function useURLRecipe(props: {
	params: Promise<{ id: string }>;
}) {
	// await the url params promise and get the id
	const params = await props.params;
	const id = params.id;

	// identify and return the recipe and its creator
	const recipe = await fetchRecipeById(id);
	const creator = await fetchUserNameById(recipe.userid);

	return [recipe, creator];
}
