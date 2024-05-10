import React from "react";
import SectionHeader from "../../shared/sectionHeader";
import Image from "next/image";
import OfficeGetStarted from "@/public/images/offices/get_started_today.png";

function GetStarted() {
  return (
    <React.Fragment>
      <div className="grid gap-28">
        <SectionHeader title="Get Started Today" />
        <div className="bg-main-green shadow-md rounded-md py-4 px-8 relative flex gap-4 items-center">
          <div className="w-full lg:w-2/3">
            <p className="text-main-white leading-8">
              Ready to take your office space to the next level? Contact us
              today to schedule a consultation with one of our expert advisors.
              Whether you&apos;re looking to lease a new office, redesign your
              existing space, or explore virtual office solutions, we&apos;re here to
              help you achieve your goals and elevate your workspace to new
              heights. Welcome to OfficeCrafters. <br /> Where your office dreams
              become reality.
            </p>
          </div>
          <div className="w-full h-44 lg:w-1/3 relative">
            <Image alt="3d office, get started today" src={OfficeGetStarted} className="w-full absolute bottom-0 drop-shadow-md" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GetStarted;
