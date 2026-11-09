import { deleteRecipe } from "@/app/lib/actions";

export default function DeleteButton(props: { recipeId: string }) {
	return (
		<button
			onClick={async () => {
				"use server";
				await deleteRecipe(props.recipeId);
			}}
			className="bg-gray-300 active:bg-gray-500 border rounded-sm h-6.5 p-0.25 pr-2 pl-2 cursor-pointer"
		>
			Delete
		</button>
	);
}
