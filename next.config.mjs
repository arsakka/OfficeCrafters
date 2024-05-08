/** @type {import('next').NextConfig} */

const getOptions = () => {
    if (!process.env.TARGET_ENVIRONMENT) {
        return {
            basePath: "/OfficeCrafters",
            images: {
                unoptimized: true,
            },
        };
    }

    if (process.env.TARGET_ENVIRONMENT === "development") {
        return {
            images: {
                unoptimized: true,
            },
        };
    }
};

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    ...getOptions(),
};

export default nextConfig;
