import { fetchRecipes } from "@/app/lib/data";

// return a list of all recipes
export default async function RecipeList() {
	const recipes = (await fetchRecipes()).recipes;
	console.log(recipes);

	return (
		<table id="recipe-table" className="border w-full">
			<tbody>
				<tr className="flex justify-evenly">
					<td className="p-1">Name</td>
					<td className="p-1">Ingredients</td>
				</tr>
				{recipes.map((recipe) => (
					<tr key={recipe.id}>
						<td>{recipe.name}</td>
						<td>{recipe.ingredients}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
