"use client";

export default function RecipeNameInput(value: string | undefined = "asd") {
	return (
		<>
			<label htmlFor="name">Recipe Name</label>
			<input
				type="text"
				id="name"
				value={value}
				className="border rounded-lg"
				onChange={(e) => {
					e.preventDefault();
					value = e.target.value;
				}}
			></input>
		</>
	);
}
