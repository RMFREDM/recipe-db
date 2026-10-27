import { fetchRecipes } from "@/app/lib/data";
import Link from "next/link";

// return a list of all recipes
export default async function RecipeList() {
	const recipes = await fetchRecipes();
	console.log(recipes);

	return (
		<table id="recipe-table" className="border w-full mt-10">
			<thead>
				<tr className="text-left">
					<th className="px-4 py-2" scope="col">
						Name
					</th>
					<th className="px-4 py-2" scope="col">
						Ingredients
					</th>
					<th className="text-right px-4 py-2" scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{recipes.map((recipe) => (
					<tr className="text-left" key={recipe.id}>
						<td className="px-4 py-2 whitespace-nowrap">
							{recipe.name}
						</td>
						<td className="text-left px-4 py-2 whitespace-nowrap">
							{recipe.ingredients}
						</td>
						<td className="text-right px-4 py-2">
							<Link
								href={`/recipes/${recipe.id}`}
								className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
							>
								View
							</Link>
							<Link
								href={`/recipes/${recipe.id}/edit`}
								className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
							>
								Edit
							</Link>
							<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-0.25 pr-2 pl-2 m-2">
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
