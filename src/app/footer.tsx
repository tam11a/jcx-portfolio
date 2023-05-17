"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
	return (
		<div className="min-h-[35vh] bg-background-light flex flex-col items-center justify-end w-full text-slate-400 p-5">
			{/* <div className="flex-1 w-full flex flex-col items-center justify-center text-xs tracking-widest gap-4 pt-5 pb-10">
				<Link
					href="/about"
					className="hover:text-slate-200 "
				>
					About
				</Link>
				<Link
					href="/service"
					className="hover:text-slate-200 "
				>
					Service
				</Link>

				<Link
					href="/work"
					className="hover:text-slate-200 "
				>
					Work
				</Link>
				<Link
					href="/contact"
					className="hover:text-slate-200"
				>
					Contact
				</Link>
				<div className="text-xl flex flex-row items-center gap-3 mt-6">
					<Link
						href={"https://www.facebook.com"}
						target="_blank"
						className="text-primary"
					>
						<Icon icon={"basil:facebook-solid"} />
					</Link>
					<Link
						href={"https://www.facebook.com"}
						target="_blank"
						className="text-pink-400"
					>
						<Icon icon={"basil:instagram-solid"} />
					</Link>
					<Link
						href={"https://www.facebook.com"}
						target="_blank"
						className="text-lime-500"
					>
						<Icon icon={"basil:whatsapp-outline"} />
					</Link>
				</div>
			</div> */}
			[Footer Here]
		</div>
	);
};

export default Footer;
