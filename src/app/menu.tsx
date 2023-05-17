import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Menu: React.FC<{ open?: boolean; onClose?: () => void }> = ({
	open = false,
	onClose = () => {},
}) => {
	return (
		<div>
			<div
				className={`fixed z-[100] top-0 left-0 ${
					open ? "" : "-translate-x-[100vw] sm:-translate-x-[70vw]"
				} w-screen sm:w-[70vw] h-screen bg-background-light text-slate-200 transition-transform duration-500 pb-11 overflow-y-auto`}
			>
				<div className="flex flex-col items-start gap-4 text-3xl sm:text-4xl font-serif [&>a>span]:text-primary-light [&>a]:opacity-60 [&>a:hover]:opacity-100 [&>a:hover]:pl-4 [&>a]:transition-all [&>a]:duration-200 mt-40 ml-24 uppercase ">
					<Link href="/">
						Ho<span>me</span>
					</Link>
					<Link href="/about">
						Ab<span>out</span>
					</Link>
					<Link href="/properties">
						Pr<span>operties</span>
					</Link>
					<Link href="/gallery">
						Ga<span>llery</span>
					</Link>
					<Link href="/article">
						Ar<span>ticle</span>
					</Link>
					<Link href="/career">
						Ca<span>reer</span>
					</Link>
					<Link href="/contact">
						Co<span>ntact</span>
					</Link>
				</div>
				<div className="bg-[url(/favicon.svg)] h-96 w-96 opacity-10 absolute bottom-4 right-4" />
			</div>
			<button
				className={`fixed top-8 sm:top-[50vh] left-full ${
					open
						? "-translate-x-[200%] sm:-translate-x-[32vw]"
						: "translate-x-[110%]"
				} text-lg sm:text-4xl border rounded-full p-2 sm:p-10 border-slate-200 text-primary transition-transform ${
					open ? "delay-500" : ""
				} duration-300 z-[101]`}
				onClick={() => onClose()}
			>
				<Icon icon={"mdi:window-close"} />
			</button>
			{open && (
				<div
					className="z-[99] fixed top-0 left-0 h-screen w-screen bg-background-light backdrop-filter bg-opacity-70 backdrop-blur-sm"
					onClick={() => onClose()}
				/>
			)}
		</div>
	);
};

export default Menu;
