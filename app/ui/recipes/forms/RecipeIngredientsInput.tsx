export default function RecipeIngredientsInput(props: {
	ingredients: string;
	handleChange: (newName: string) => void;
}) {
	return (
		<div id="ingredients-div" className="flex">
			<label htmlFor="ingredients" className="p-2">
				Ingredients
			</label>
			<textarea
				id="ingredients"
				name="ingredients"
				value={props.ingredients}
				onChange={(e) => {
					e.preventDefault();
					props.handleChange(e.target.value);
				}}
				className="border rounded-lg field-sizing-fixed w-100 p-1"
			></textarea>
		</div>
	);
}
