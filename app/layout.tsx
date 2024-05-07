import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OfficeCrafters - Your Workspace Wizards",
    description:
        "At OfficeCrafters, we understand the importance of a well-designed, functional, and inspiring workspace. Whether you're a startup looking for your first office space, a growing business in need of expansion, or an established corporation seeking a strategic relocation, we are here to assist you every step of the way.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
