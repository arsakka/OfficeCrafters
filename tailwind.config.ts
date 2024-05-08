import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                main: {
                    white: "#FEFEFE",
                    gray: "#41423C",
                    green: "#1C584C",
                    black: "#0E0E0E"
                }
            },
            textColor: {
                main: {
                    white: "#FEFEFE",
                    gray: "#41423C",
                    green: "#1C584C",
                    black: "#0E0E0E"
                }
            },
            borderColor: {
                main: {
                    white: "#FEFEFE",
                    gray: "#41423C",
                    green: "#1C584C",
                    black: "#0E0E0E"
                }
            },
            gradientColorStops: {
                main: {
                    white: "#FEFEFE",
                    gray: "#41423C",
                    green: "#1C584C",
                    black: "#0E0E0E"
                }
            }
        },
    },
    plugins: [],
};
export default config;
