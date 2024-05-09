"use client";
import { ServicesInterface } from "@/src/components/shared/interfaces/ServicesInterface";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface props {
  service: ServicesInterface;
}

function ServiceBox({ service }: props) {
  const [hover, setHover] = useState(false);

  return (
    <React.Fragment>
      <Link
        href={service.url}
        className="grow basis-[26rem] overflow-hidden rounded-md relative hover:shadow-lg transition-all duration-200"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-br from-main-green/65 to-main-green shadow-md transition-all duration-200 rounded-t-3xl ${
            hover ? "h-2/3" : "h-1/4"
          }`}
        >
          <div className="grid gap-4">
            <h3 className="text-main-white text-2xl">{service.name}</h3>
            {
                hover && (
                    <div className="grid gap-8">
                        <span className="bg-main-white flex w-full h-[2px]"></span>
                        <p className="text-main-white text-lg">{service.description}</p>
                    </div>
                )
            }
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default ServiceBox;
