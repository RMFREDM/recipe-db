import { auth, signOut } from "@/auth";

export default async function ProfileDisplay() {
	const session = await auth();
	return (
		<div className="flex">
			<div id="user-info" className="flex flex-col">
				<p>{session?.user?.name}</p>
				<p>{session?.user?.email}</p>
			</div>

			{/* Log out button */}
			<form
				action={async () => {
					"use server";
					await signOut({ redirectTo: "/" });
				}}
			>
				<button className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2 cursor-pointer">
					Sign Out
				</button>
			</form>
		</div>
	);
}
