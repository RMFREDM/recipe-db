export default function RecipeNameInput(name: { name: string }) {
	return (
		<div id="name-div">
			<label htmlFor="name-input" className="p-2">
				Recipe Name
			</label>
			<input
				type="text"
				id="name-input"
				defaultValue={name.name}
				className="border rounded-lg"
			></input>
		</div>
	);
}
