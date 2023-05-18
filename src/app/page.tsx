"use client";

import { InlineIcon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-background text-slate-300 max-w-[100vw] overflow-x-hidden">
			{/* Hero Section */}
			<div className="mx-auto bg-[url(/bg.jpg)] object-cover bg-center">
				<div className="min-h-[89vh] w-full bg-gradient-to-b from-transparent to-background-light to-70% flex flex-col items-center justify-center py-5">
					<div
						className="flex flex-col items-center"
						data-aos="fade-in"
					>
						<p className="text-2xl font-bold font-serif text-center text-slate-300 mb-1">
							DISCOVER
						</p>
						<p className="text-5xl sm:text-6xl font-serif text-center text-primary-light mb-3 font-medium">
							PERFECTION
						</p>
						<p className="text-2xl font-serif font-bold text-center text-slate-200 max-w-md">
							IN EVERY DETAILS
						</p>
						<div className="mt-7 border-2 p-1 rounded-full border-slate-600 hover:border-slate-200 transition-colors duration-300">
							<button className="tracking-widest bg-gradient-to-tr from-primary to-primary-light px-5 py-3 rounded-full text-background-light font-bold uppercase">
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
			<div className="bg-background-light min-h-[40vh]">
				<div className="max-w-6xl mx-auto px-5 sm:px-12">
					<h1
						className="text-center md:text-left scale-100 font-serif text-4xl tracking-wide leading-snug uppercase"
						// data-aos="fade-up"
					>
						Top <span className="text-primary-light">Rated</span> <br />{" "}
						<span className="text-5xl font-medium">
							Wo<span className="text-primary-light">rks</span>
						</span>
					</h1>
					<div className="flex flex-col-reverse gap-6 md:flex-row justify-between flex-1">
						<div
							className="py-4 px-3 md:max-w-md flex flex-col gap-2"
							data-aos="fade-right"
						>
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
						<div
							className="flex-1 flex flex-row justify-center md:justify-end"
							// data-aos="fade-left"
						>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					className="fill-slate-900"
				>
					<path
						fill-opacity="1"
						d="M0,128L30,144C60,160,120,192,180,186.7C240,181,300,139,360,144C420,149,480,203,540,218.7C600,235,660,213,720,208C780,203,840,213,900,224C960,235,1020,245,1080,261.3C1140,277,1200,299,1260,282.7C1320,267,1380,213,1410,186.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
					></path>
				</svg>
			</div>
			<div className="bg-gradient-to-b from-slate-900 to-background-light min-h-[40vh] pb-10">
				<div className="max-w-6xl mx-auto px-5 sm:px-12 py-8">
					<div className="flex flex-col-reverse lg:flex-row justify-between gap-8 min-h-[50vh]">
						<div className="flex-1 relative grid gap-4">
							<div className="relative min-h-[300px]">
								<Image
									src={`/ascendance/1.jpg`}
									fill
									alt={"Ascendance of JCX - 1"}
									className="rounded-md"
									data-aos="fade-up"
								/>
							</div>
							<div className=" grid grid-cols-2 gap-4">
								<div className="relative min-h-[250px]">
									<Image
										src={`/ascendance/2.jpg`}
										fill
										alt={"Ascendance of JCX - 1"}
										className="rounded-md"
										data-aos="fade-right"
									/>
								</div>
								<div className="relative min-h-[250px]">
									<Image
										src={`/ascendance/3.jpg`}
										fill
										alt={"Ascendance of JCX - 1"}
										className="rounded-md"
										data-aos="fade-left"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center lg:items-start justify-center">
							<h1
								className="text-center lg:text-left scale-100 font-serif text-4xl tracking-wide leading-snug uppercase"
								data-aos="fade-up"
							>
								<span className="text-7xl font-medium">
									O<span className="text-primary-light">UR</span> <br />{" "}
								</span>
								ASCEND
								<span className="text-primary-light">ANCE</span>
							</h1>
							<p
								className="text-sm mt-6 mx-auto lg:mx-0 text-center lg:text-justify w-full sm:max-w-lg"
								data-aos="fade-left"
							>
								<b className="text-primary-light">JCX Developments Ltd</b>{" "}
								embarked on the Real Estate journey with the commitment to bring
								contemporary design and develop large-scale{" "}
								<b className="text-primary-light">Residential</b>,{" "}
								<b className="text-primary-light">Commercial</b>, and{" "}
								<b className="text-primary-light">Condominium</b> projects in
								Bangladesh with Japanese collaboration and experience.
							</p>
							<p
								className="text-sm mt-3 mx-auto lg:mx-0 text-center lg:text-justify w-full sm:max-w-lg"
								data-aos="fade-left"
							>
								We will strive to deliver precise, exquisite solutions to our
								client&apos;s wishes and requirements so that their aspirations
								become a reality. This will be accomplished by introducing
								state-of-the-art innovative Japanese technologies with the
								partnership with Creed Group from Japan.
							</p>
							<div
								className="w-full mt-7"
								data-aos="fade-left"
							>
								<div className="mx-auto lg:mx-0 border-2 p-1 rounded-full border-slate-600 hover:border-slate-200 transition-colors duration-300 w-fit">
									<button className="tracking-widest bg-gradient-to-br from-primary-light to-primary px-5 py-3 rounded-full text-background-light font-bold uppercase">
										About JCX
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
