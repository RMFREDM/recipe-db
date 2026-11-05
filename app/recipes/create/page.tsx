import { fetchUserByEmail } from "@/app/lib/data";
import CreateForm from "@/app/ui/recipes/forms/CreateForm";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Recipe",
};

export default async function Page() {
	const session = await auth();
	const userId = (await fetchUserByEmail(session?.user?.email as string))?.id;

	return <CreateForm userId={userId} />;
}
