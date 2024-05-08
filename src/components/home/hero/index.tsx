import React from "react";
import HeroOfficeImage from "@/public/images/offices/room-interior-design.jpg";
import Image from "next/image";
import { HomeHero } from "@/src/constants/HomeHero";
import { MainButton } from "@/src/constants/styles";

function Hero() {
    return (
        <div className="min-h-screen bg-main-green flex items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 z-[1]">
                <Image
                    src={HeroOfficeImage}
                    width={2000}
                    height={1160}
                    alt="room interior desiog, meeting room, office agency, office crafter"
                    className="w-full h-full object-cover object-center z-[1]"
                />
                <div className="w-full h-full z-[2] absolute top-0 left-0 bg-gradient-to-r from-main-green to-transparent"></div>
            </div>
            <div className="z-[2] p-10 text-main-white grid gap-6 w-full lg:w-1/2">
                <div className="grid gap-2">
                    <h2 className="text-xl">{HomeHero.title}</h2>
                    <h1 className="text-6xl">{HomeHero.name}</h1>
                    <h2 className="text-xl">{HomeHero.subTitle}</h2>
                </div>
                <div className="grid gap-4">
                    <p className="text-lg">{HomeHero.body.p1}</p>
                    <p className="text-lg">{HomeHero.body.p2}</p>
                    <button className={MainButton}>{HomeHero.button}</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
