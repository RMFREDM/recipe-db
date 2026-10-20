import { gideonFont } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Recipe",
};

export default function page() {
	return <h1 className={`${gideonFont} text-2xl`}>Create Recipe Page</h1>;
}
