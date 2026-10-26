import { fetchRecipeById, fetchUserNameById } from "@/app/lib/data";

export default async function RecipeDetails(propParams: object) {
	const params = await propParams.propParams.params;
	const id = params.id;
	const recipe = await fetchRecipeById(id);
	const creator = await fetchUserNameById(recipe.userid);

	return (
		<>
			<h1 className={`font-serif text-2xl`}>{recipe.name}</h1>
			<div id="ingredients-section">
				<h2 className={`font-serif text-xl`}>Ingredients</h2>
				<p>{recipe.ingredients}</p>
			</div>
			<h2 className={`font-serif text-xl`}>instructions</h2>
			<div id="instructions-section">
				<p>{recipe.steps}</p>
			</div>
			<h2 className={`font-serif text-xl`}>Creator</h2>
			<div id="creator-section">
				<p>{creator}</p>
			</div>
		</>
	);
}
