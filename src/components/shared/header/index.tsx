import { MainMenu } from "@/src/constants/MainMenu";
import { HeaderButton } from "@/src/constants/styles";
import Link from "next/link";
import React from "react";

function Header() {
    return (
        <React.Fragment>
            <header className="fixed top-0 left-0 w-full z-10">
                <div className="flex gap-4 items-center justify-between py-2 px-6 m-4 shadow-lg rounded bg-gradient-to-br from-main-white/20 to-main-white/60">
                    <div className="flex gap-2 items-center">
                        <p className="text-main-black font-medium">
                            OfficeCrafters
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {MainMenu.map((menu, index) => (
                            <Link
                                href={menu.url}
                                className={HeaderButton}
                                key={index}
                            >
                                {menu.icon}
                                <p>{menu.label}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center"></div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
