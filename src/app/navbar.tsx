"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { Icon } from "@iconify/react";
import Menu from "./menu";
import { useToggle } from "@tam11a/react-use-hooks";
import AOS from "aos";

const Navbar: React.FC = () => {
	const { state: menu, toggleState: toggleMenu } = useToggle(false);
	React.useEffect(() => {
		const cursor: HTMLDivElement | null = document.querySelector(".cursor");
		const cursord: HTMLDivElement | null = document.querySelector(".cursor-d");
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			cursor?.classList.add("hidden");
			cursord?.classList.add("hidden");
		} else {
			cursor?.classList.remove("hidden");
			cursord?.classList.remove("hidden");
		}

		document.addEventListener("mousemove", (e) => {
			cursor?.setAttribute(
				"style",
				"top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;"
			);
			cursord?.setAttribute(
				"style",
				"top: " + (e.clientY - 0) + "px; left: " + (e.clientX - 0) + "px;"
			);
		});

		document.addEventListener("click", () => {
			cursor?.classList.add("expand");

			setTimeout(() => {
				cursor?.classList.remove("expand");
			}, 500);
		});
	});

	React.useEffect(() => {
		// Hide scrollability when menu is open
		if (menu)
			document?.querySelector("body")?.classList.add("overflow-y-hidden");
		else document?.querySelector("body")?.classList.remove("overflow-y-hidden");
	}, [menu]);

	React.useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div className="cursor"></div>
			<div className="cursor-d"></div>
			<nav className="fixed top-0 left-0 w-full z-10 bg-background backdrop-filter backdrop-blur-md border-b border-slate-900 bg-opacity-30">
				<div className="max-w-6xl mx-auto px-5 sm:px-12 py-5">
					<div className="flex items-center justify-between text-slate-400 text-xs tracking-widest font-semibold gap-x-4">
						<button
							className="flex items-center gap-2 text-xs font-semibold tracking-widest hover:text-slate-200 text-slate-400 [&>svg]:text-primary-700 [&:hover>svg]:text-primary transition-colors duration-300"
							onClick={() => toggleMenu()}
						>
							<Icon
								icon="iconamoon:menu-burger-horizontal-duotone"
								className="text-lg"
							/>
							Menu
						</button>
						<Link
							href="/"
							className="mx-4"
						>
							<Image
								src={Logo}
								height={30}
								alt="Undefined Solutions"
								priority
							/>
						</Link>
						<Link
							href="/contact"
							className="hover:text-slate-200 text-slate-400 border-2 border-primary-800 hover:border-primary px-5 py-2 rounded-full transition-colors duration-300"
						>
							Contact
						</Link>
					</div>
				</div>
				<Menu
					open={menu}
					onClose={toggleMenu}
				/>
			</nav>
		</>
	);
};

export default Navbar;
