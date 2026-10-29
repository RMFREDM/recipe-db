import RecipeNameInput from "./RecipeNameInput";
import RecipeIngredientsInput from "./RecipeIngredientsInput";
import RecipeStepsInput from "./RecipeSteps";

export default function EditFormSkeleton() {
	return (
		<>
			<h1 className={`font-serif text-2xl`}>Loading Recipe</h1>
			<form className="flex flex-col w-fit gap-5 p-5 animate-pulse">
				<div className="flex items-center">
					<p className="animate-pulse bg-gray-200 rounded-full w-30 h-5"></p>
					<input
						disabled
						className="border rounded-lg animate-pulse bg-gray-200 ml-2"
					></input>
				</div>
				<div className="flex items-center">
					<p className="animate-pulse bg-gray-200 rounded-full w-30 h-5"></p>
					<textarea
						disabled
						className="border rounded-lg animate-pulse bg-gray-200 ml-2 w-100"
					></textarea>
				</div>
				<div className="flex items-center">
					<p className="animate-pulse bg-gray-200 rounded-full w-30 h-5"></p>
					<textarea
						disabled
						className="border rounded-lg animate-pulse bg-gray-200 ml-2 w-100"
					></textarea>
				</div>
				<button
					disabled
					className="bg-gray-300 border rounded-sm w-18.5 h-6.5 p-0.25 pr-2 pl-2 m-2"
				></button>
			</form>
		</>
	);
}
