import { auth } from "@/auth";
import { fetchUserByEmail } from "./data";

export default async function useUserId() {
	// get the current user's id
	const session = await auth();
	const user = await fetchUserByEmail(session?.user?.email as string);
	if (!user) {
		return null;
	}
	return user.id;
}
