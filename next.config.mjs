/** @type {import('next').NextConfig} */

const getOptions = () => {
    if (!process.env.TARGET_ENVIRONMENT) {
        return;
    }

    if (process.env.TARGET_ENVIRONMENT === "development") {
        return {
            images: {
                unoptimized: true,
            },
        };
    }

    if (process.env.TARGET_ENVIRONMENT === "production") {
        return {
            basePath: "/OfficeCrafters",
        };
    }
};

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    ...getOptions(),
};

export default nextConfig;
