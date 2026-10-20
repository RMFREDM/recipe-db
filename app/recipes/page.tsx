import { Metadata } from "next";
import RecipeList from "../ui/recipes/RecipeList";
import { gideonFont } from "../ui/fonts";

export const metadata: Metadata = {
	title: "Recipes",
};

export default function page() {
	return (
		<>
			<h1 className={`${gideonFont} text-2xl`}>Recipes Page</h1>
			<RecipeList />
		</>
	);
}
