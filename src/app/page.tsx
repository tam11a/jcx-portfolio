"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-background text-slate-300">
			{/* Hero Section */}
			<div className="mx-auto bg-[url(/bg.jpg)] object-cover bg-center">
				<div className="min-h-[89vh] w-full bg-gradient-to-b from-transparent to-background-light to-70% flex flex-col items-center justify-center py-5">
					<div className="flex flex-col items-center">
						<p className="text-2xl font-bold font-serif text-center text-slate-300 mb-1">
							DISCOVER
						</p>
						<p className="text-5xl sm:text-6xl font-serif text-center text-primary-light mb-3">
							PERFECTION
						</p>
						<p className="text-2xl font-serif font-bold text-center text-slate-200 max-w-md">
							IN EVERY DETAILS
						</p>
						<div className="mt-7 border-2 p-1 rounded-full border-slate-600 hover:border-slate-200 transition-colors duration-300">
							<button className="tracking-widest bg-primary-light px-5 py-3 rounded-full text-background font-bold uppercase">
								Explore
							</button>
						</div>
					</div>
					{/* <div className="flex flex-col items-center gap-2 text-xs opacity-50 hover:opacity-100">
						<Icon
							icon={"gg:scroll-v"}
							className="text-4xl text-primary"
						/>
						<p>Scroll Down</p>
					</div> */}
				</div>
			</div>
			<div className="bg-background-light min-h-[200vh]">
				<div className="max-w-6xl mx-auto px-5 sm:px-12">
					<h1 className="text-center md:text-left scale-100 font-serif text-4xl tracking-wide leading-snug uppercase">
						Top <span className="text-primary-light">Rated</span> <br />{" "}
						<span className="text-5xl font-medium">
							Wo<span className="text-primary-light">rks</span>
						</span>
					</h1>
					<div className="flex flex-col-reverse gap-6 md:flex-row justify-between flex-1">
						<div className="py-4 px-3 md:max-w-md flex flex-col gap-2">
							<h4 className="font-bold text-xl">MM Villa</h4>
							<p className="text-xs font-semibold">Basundhara R/A, Dhaka</p>
							<p className="text-xs font-semibold">1500 Sq. Ft.</p>
							<p className="text-justify text-sm mt-4">
								MM Villa, the elegant residence is nestled on a spacious
								residential block in a desirably tranquil location. This
								enviable and exclusive property also provides an uncompromised
								standard of living quality.
							</p>
							<div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100">
								<button className="text-start">
									<p className="text-xs text-primary-light tracking-wider font-medium">
										Previous
									</p>
									<p>Platinum Palace</p>
								</button>
								<button className="text-end">
									<p className="text-xs text-primary-light tracking-wider font-medium">
										Next
									</p>
									<p>Ambassador</p>
								</button>
							</div>
						</div>
						<div className="flex-1 flex flex-row justify-center md:justify-end">
							<div className=" w-fit h-fit border-4 border-slate-600 hover:border-slate-200 transition-colors duration-300 p-3 rounded-t-full mt-10 md:-mt-[40%]">
								<Image
									src={
										"https://jcxbd.com/wp-content/uploads/2021/09/Featured-Projects-MM-Villa.jpg"
									}
									height={550}
									width={350}
									priority
									alt="JCX - MM Villa"
									className="w-full min-w-[340px] max-w-md z-[1] relative rounded-t-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
