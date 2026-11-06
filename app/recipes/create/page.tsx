import CreateForm from "@/app/ui/recipes/forms/CreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Recipe",
};

export default async function Page() {
	return <CreateForm />;
}
