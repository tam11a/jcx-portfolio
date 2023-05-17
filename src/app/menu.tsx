import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Menu: React.FC<{ open?: boolean; onClose?: () => void }> = ({
	open = false,
	onClose = () => {},
}) => {
	return (
		<div
			className={`fixed top-0 left-0 ${
				open ? "" : "-translate-x-[100vw] sm:-translate-x-[70vw]"
			} w-screen sm:w-[70vw] h-screen bg-background-light text-slate-200 transition-transform duration-500`}
		>
			<div className="flex flex-col items-start gap-2 text-3xl font-serif tracking-widest [&>a]:opacity-60 [&>a:hover]:opacity-100">
				<Link
					href="/about"
					className=""
				>
					About
				</Link>
				<Link
					href="/service"
					className=""
				>
					Service
				</Link>
				<Link
					href="/work"
					className=""
				>
					Work
				</Link>
			</div>
			<button
				className={`absolute top-3  sm:top-1/2 left-full ${
					open
						? "-translate-x-[200%] sm:-translate-x-1/2"
						: "-translate-x-[110%]"
				} text-lg sm:text-4xl border rounded-full p-2 sm:p-10 border-slate-200 text-primary transition-transform ${
					open ? "delay-500" : ""
				} duration-300`}
				onClick={() => onClose()}
			>
				<Icon icon={"mdi:window-close"} />
			</button>
		</div>
	);
};

export default Menu;
