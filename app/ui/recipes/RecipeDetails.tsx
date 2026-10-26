import { fetchRecipeById, fetchUserNameById } from "@/app/lib/data";

export default async function RecipeDetails(propParams: object) {
	const params = await propParams.propParams.params;
	const id = params.id;
	const recipe = await fetchRecipeById(id);
	const creator = await fetchUserNameById(recipe.userid);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>{recipe.name}</h1>
			<p>{recipe.ingredients}</p>
			<p>{recipe.steps}</p>
			<p>{creator}</p>
		</>
	);
}
