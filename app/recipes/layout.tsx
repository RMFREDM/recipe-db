import RecipeNav from "../ui/recipes/RecipeNav";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<RecipeNav />
			{children}
		</>
	);
}
