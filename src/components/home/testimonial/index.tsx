"use client";
import React from "react";
import SectionHeader from "../../shared/sectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./components/slider";
import { TestimonialList } from "@/src/constants/TestimonialList";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <React.Fragment>
      <div className="grid gap-4">
        <SectionHeader title="What Clients Said" />
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            loop
            autoplay
            pagination={{ clickable: true }}
          >
            {TestimonialList.map((review, index) => (
              <SwiperSlide key={index} className="mb-14">
                <Slider review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonial;
