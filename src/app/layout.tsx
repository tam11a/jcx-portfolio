import { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
	icons: "/favicon.svg",
	title: "JCX BD - Beyond Bonding",
	description: "Welcome to Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className="bg-background overflow-x-hidden"
				suppressHydrationWarning
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
