import { gideonFont } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Edit Recipe",
};

export default function page() {
	return <h1 className={`${gideonFont} text-2xl`}>Edit Recipe Page</h1>;
}
