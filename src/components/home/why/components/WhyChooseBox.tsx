import { WhyChooseInterface } from "@/src/components/shared/interfaces/WhyChooseInterface";
import Image from "next/image";
import React from "react";

interface props {
  item: WhyChooseInterface;
  index: number;
}

function WhyChooseBox({ item, index }: props) {
  return (
    <React.Fragment>
      <div
        className={`flex items-center gap-4 ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`grow basis-[50rem] flex items-center ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-full max-w-96 h-[20rem] shadow-md rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grow grid gap-4">
          <h3 className="text-main-black text-xl font-medium">{item.name}</h3>
          <span className="flex w-full h-[1px] bg-main-green"></span>
          <p className="text-main-black text-lg">{item.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhyChooseBox;
