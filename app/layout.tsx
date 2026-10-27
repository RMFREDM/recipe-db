import type { Metadata } from "next";
import { gideon, inter } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Recipe DB",
		default: "Recipe DB",
	},
	description: "Create and view recipes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`h-full ${inter.variable} ${gideon.variable}`}
		>
			<body className={`font-sans antialiased p-2`}>{children}</body>
		</html>
	);
}
