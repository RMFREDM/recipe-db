import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { interFont } from "./ui/fonts";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Recipe DB",
		default: "Recipe DB",
	},
	description: "Create and view recipes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`h-full`}>
			<body className={`${interFont} antialiased p-2`}>{children}</body>
		</html>
	);
}
