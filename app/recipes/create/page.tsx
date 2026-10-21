import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Recipe",
};

export default function page() {
	return <h1 className={`font-serif text-2xl`}>Create Recipe Page</h1>;
}
