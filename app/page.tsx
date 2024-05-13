import Hero from "@/src/components/home/hero";
import Services from "@/src/components/home/services";
import GetStarted from "@/src/components/home/started";
import Testimonial from "@/src/components/home/testimonial";
import WhyChooseUs from "@/src/components/home/why";
import ContactUs from "@/src/components/home/contact";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="max-w-[1400px] mx-auto m-4 grid gap-4">
        <Services />
        <WhyChooseUs />
        <GetStarted />
        <Testimonial />
        <ContactUs />
      </div>
    </React.Fragment>
  );
}
