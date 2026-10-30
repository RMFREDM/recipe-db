export default function RecipeStepsInput(props: {
	steps: string;
	handleChange: (newName: string) => void;
}) {
	return (
		<div id="steps-div" className="flex">
			<label htmlFor="steps" className="p-2">
				Steps
			</label>
			<textarea
				id="steps"
				name="steps"
				value={props.steps}
				onChange={(e) => {
					e.preventDefault();
					props.handleChange(e.target.value);
				}}
				className="border rounded-lg field-sizing-fixed w-100 p-1"
			></textarea>
		</div>
	);
}
