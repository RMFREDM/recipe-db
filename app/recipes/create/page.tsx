import CreateForm from "@/app/ui/recipes/forms/CreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Recipe",
};

export default function Page() {
	return <CreateForm />;
}
