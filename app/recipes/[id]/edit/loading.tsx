import EditFormSkeleton from "@/app/ui/recipes/forms/EditFormSkeleton";
import Link from "next/link";

export default function Loading() {
	return (
		<>
			<EditFormSkeleton />
			<Link
				href={"/recipes"}
				className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
			>
				Back to Recipe List
			</Link>
		</>
	);
}
