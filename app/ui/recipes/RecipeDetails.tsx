import useURLRecipe from "@/app/lib/useURLRecipe";
import useUserId from "@/app/lib/useUserId";
import Link from "next/link";
import DeleteButton from "./forms/DeleteButton";

export default async function RecipeDetails(props: {
	props: { params: Promise<{ id: string }> };
}) {
	// get the recipe being edited
	const [recipe, creator] = await useURLRecipe(props.props);

	// get the user's id
	const userId = await useUserId();

	return (
		<>
			<h1 className={`font-serif text-2xl`}>{recipe.name}</h1>
			<div
				id="recipe-info"
				className=" flex flex-col justify-between gap-5 h-fit w-fit p-5"
			>
				<div id="ingredients-section">
					<h2 className={`font-serif text-xl whitespace-pre`}>
						Ingredients
					</h2>
					<p>{recipe.ingredients}</p>
				</div>

				<div id="instructions-section">
					<h2 className={`font-serif text-xl whitespace-pre`}>
						Instructions
					</h2>
					<p>{recipe.steps}</p>
				</div>

				<div id="creator-section">
					<h2 className={`font-serif text-xl`}>Creator</h2>
					<p>This recipe was created by: {creator}</p>
				</div>

				{userId == recipe.userid && (
					<div id="modification-links">
						<Link
							href={`/recipes/${recipe.id}/edit`}
							className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
						>
							Edit
						</Link>
						<DeleteButton recipeId={recipe.id} />
					</div>
				)}
			</div>
		</>
	);
}
