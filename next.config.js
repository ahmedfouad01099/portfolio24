/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "export",
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};

module.exports = nextConfig;
