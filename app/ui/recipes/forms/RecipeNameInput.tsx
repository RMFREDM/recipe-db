export default function RecipeNameInput(props: {
	name: string;
	handleChange: (newName: string) => void;
}) {
	return (
		<div id="name-div">
			<label htmlFor="name" className="p-2">
				Recipe Name
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={props.name}
				onChange={(e) => {
					e.preventDefault();
					props.handleChange(e.target.value);
				}}
				className="border rounded-lg"
			></input>
		</div>
	);
}
