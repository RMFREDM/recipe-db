import { fetchRecipes } from "@/app/lib/data";
import Link from "next/link";

// return a list of all recipes
export default function RecipeListSkeleton() {
	return (
		<table id="recipe-table" className="border w-full">
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
				<tr className="text-left">
					<td className="px-4 py-2 whitespace-nowrap">name</td>
					<td className="text-left px-4 py-2 whitespace-nowrap">
						ingredients
					</td>
					<td className="text-right px-4 py-2">
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2">
							View
						</button>
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2">
							Edit
						</button>
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-0.25 pr-2 pl-2 m-2">
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
