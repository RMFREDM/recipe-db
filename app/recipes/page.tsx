import { Metadata } from "next";
import RecipeList from "../ui/recipes/RecipeList";

export const metadata: Metadata = {
	title: "Recipes",
};

export default function page() {
	return (
		<>
			<h1 className={`font-serif text-2xl`}>Recipes Page</h1>
			<RecipeList />
		</>
	);
}
