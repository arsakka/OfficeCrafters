import React from "react";
import SectionHeader from "../../shared/sectionHeader";
import { WhyChooseList } from "@/src/constants/WhyChooseList";
import WhyChooseBox from "./components/WhyChooseBox";

function WhyChooseUs() {
  return (
    <React.Fragment>
      <div className="grid gap-4">
        <SectionHeader title="Why Choose OfficeCrafters?" />
        <div className="grid gap-4">
          {WhyChooseList.map((item, index) => (
            <WhyChooseBox item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhyChooseUs;
