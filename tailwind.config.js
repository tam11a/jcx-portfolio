/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#ee5847",
					light: "#f1796c",
					dark: "#a73e32",
					50: "#fcdeda",
					100: "#facdc8",
					200: "#f8bcb5",
					300: "#f7aca3",
					400: "#f59b91",
					500: "#f1796c",
					600: "#d64f40",
					700: "#be4639",
					800: "#a73e32",
					900: "#772c24",
				},
				secondary: {
					DEFAULT: "#343c7b",
					light: "#5d6395",
					dark: "#242a56",
					50: "#d6d8e5",
					100: "#aeb1ca",
					200: "#9a9ebd",
					300: "#858ab0",
					400: "#7177a3",
					500: "#2f366f",
					600: "#2a3062",
					700: "#242a56",
					800: "#1f244a",
					900: "#151831",
				},
				background: {
					DEFAULT: "#080913",
					light: "#0b0d1a",
					dark: "#05050b",
				},
			},
			fontFamily: {
				sans: ["Jost", "sans-serif"],
				serif: ["Bodoni Moda", "serif"],
			},
		},
	},
	plugins: [],
};
