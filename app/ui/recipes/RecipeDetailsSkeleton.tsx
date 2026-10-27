import Link from "next/link";

export default function RecipeDetailsSkeleton() {
	return (
		<>
			<h1 className={`font-serif text-2xl`}>Loading Recipe</h1>
			<div
				id="recipe-info"
				className=" flex flex-col justify-between gap-5 h-fit w-fit p-5"
			>
				<div id="ingredients-section">
					<h2 className={`font-serif text-xl whitespace-pre`}>
						Ingredients
					</h2>
					<p className="animate-pulse bg-gray-200 rounded-full w-50 h-5"></p>
				</div>

				<div id="instructions-section">
					<h2 className={`font-serif text-xl whitespace-pre`}>
						Instructions
					</h2>
					<p className="animate-pulse bg-gray-200 rounded-full w-50 h-5"></p>
				</div>

				<div id="creator-section">
					<h2 className={`font-serif text-xl`}>Creator</h2>
					<p className="animate-pulse bg-gray-200 rounded-full w-50 h-5"></p>
				</div>
			</div>
			<Link
				href={"/recipes"}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Back to Recipe List
			</Link>
		</>
	);
}
