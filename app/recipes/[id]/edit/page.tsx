import EditForm from "@/app/ui/recipes/forms/EditForm";
import EditFormSkeleton from "@/app/ui/recipes/forms/EditFormSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Edit Recipe",
};

export default function page(props: { params: Promise<{ id: string }> }) {
	return (
		<>
			<Suspense fallback={<EditFormSkeleton />}>
				<EditForm props={props} />
			</Suspense>
		</>
	);
}
