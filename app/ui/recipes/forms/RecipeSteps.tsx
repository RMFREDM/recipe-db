export default function RecipeStepsInput(steps: { steps: string }) {
	return (
		<div id="steps-div" className="flex">
			<label htmlFor="steps" className="p-2">
				Steps
			</label>
			<textarea
				id="steps"
				defaultValue={steps.steps}
				className="border rounded-lg field-sizing-fixed w-100 p-1"
			></textarea>
		</div>
	);
}
