export default function RecipeIngredientsInput(ingredients: {
	ingredients: string;
}) {
	return (
		<div id="ingredients-div" className="flex">
			<label htmlFor="ingredients-input" className="p-2">
				Ingredients
			</label>
			<textarea
				id="ingredients-input"
				defaultValue={ingredients.ingredients}
				className="border rounded-lg field-sizing-fixed w-100 p-1"
			></textarea>
		</div>
	);
}
