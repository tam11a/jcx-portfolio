/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jcxbd.com",
			},
		],
	},
};

module.exports = nextConfig;
