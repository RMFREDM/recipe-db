import { fetchRecipes } from "@/app/lib/data";
import Link from "next/link";

// return a list of all recipes
export default function RecipeListSkeleton() {
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
				<tr className="text-left animate-pulse">
					<td className="px-4 py-1 whitespace-nowrap">
						<div className="bg-gray-200 rounded-full w-30 h-5"></div>
					</td>
					<td className="text-left px-4 py-2 whitespace-nowrap">
						<div className="bg-gray-200 rounded-full w-30 h-5"></div>
					</td>
					<td className="text-right px-4 py-2">
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 h-8.5 w-14"></button>
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 h-8.5 w-14"></button>
						<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 h-8.5 w-14"></button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
