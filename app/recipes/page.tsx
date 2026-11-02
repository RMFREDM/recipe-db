import { Metadata } from "next";
import RecipeList from "../ui/recipes/RecipeList";
import { Suspense } from "react";
import RecipeListSkeleton from "../ui/recipes/RecipeListSkeleton";
import Link from "next/link";
import { signOut } from "@/auth";

export const metadata: Metadata = {
	title: "Recipes",
};

export default function Page() {
	return (
		<>
			<h1 className={`font-serif text-2xl mb-2`}>Recipes Page</h1>
			<Link
				href={`/recipes/create`}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm py-1 pr-2 pl-2 m-2"
			>
				Create New Recipe
			</Link>
			<Suspense fallback={<RecipeListSkeleton />}>
				<RecipeList />
			</Suspense>
			<form
				action={async () => {
					"use server";
					await signOut({ redirectTo: "/" });
				}}
			>
				<button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
					<div className="hidden md:block">Sign Out</div>
				</button>
			</form>
		</>
	);
}
