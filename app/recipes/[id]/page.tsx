import { Metadata } from "next";

export const metadata: Metadata = {
	title: "View Recipe",
};

export default function page() {
	return <h1 className={`font-serif text-2xl`}>View Recipe Page</h1>;
}
