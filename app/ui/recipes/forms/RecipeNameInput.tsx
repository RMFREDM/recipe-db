export default function RecipeNameInput(name: { name: string }) {
	return (
		<div id="name-div">
			<label htmlFor="name" className="p-2">
				Recipe Name
			</label>
			<input
				type="text"
				id="name"
				defaultValue={name.name}
				className="border rounded-lg"
			></input>
		</div>
	);
}
