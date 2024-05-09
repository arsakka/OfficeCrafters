import { ServicesList } from "@/src/constants/ServicesList";
import { GreenButton } from "@/src/constants/styles";
import React from "react";
import ServiceBox from "./components/ServiceBox";
import Link from "next/link";
import SectionHeader from "../../shared/sectionHeader";

function Services() {
  return (
    <React.Fragment>
      <div className="grid gap-4">
        <SectionHeader title="Our Services" />
        <div className="flex gap-4">
          {ServicesList.slice(0, 3).map((service, index) => (
            <ServiceBox service={service} key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/services"} className={GreenButton}>
            View More
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
