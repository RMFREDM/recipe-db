import { Inter, Gideon_Roman } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const interFont = inter.className;

export const gideon = Gideon_Roman({
	weight: ["400"],
	subsets: ["latin"],
});
export const gideonFont = gideon.className;
