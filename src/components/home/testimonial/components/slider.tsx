import { TestimonialInterface } from "@/src/components/shared/interfaces/TestimonialInterface";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface props {
  review: TestimonialInterface;
}

const getStars = (star: number) => {
  let starts = [];

  for (let index = 0; index < star; index++) {
    starts.push(index);
  }

  return starts;
};

function Slider({ review }: props) {
  return (
    <React.Fragment>
      <div className="h-full bg-main-white shadow-md rounded-md relative mt-10 pt-10 min-h-[20rem]">
        <div className="w-20 h-20 rounded-full overflow-hidden absolute -top-10 left-1/2 -translate-x-1/2 shadow-md">
          <Image
            alt={review.name}
            src={review.image}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid gap-4 p-4">
          <h3 className="text-lg font-medium text-center">{review.name}</h3>
          <div className="flex gap-2 items-center justify-center text-orange-400">
            {getStars(review.stars).map((star) => (
              <FaStar size={25} key={star} />
            ))}
          </div>
          <p className="text-center">{review.testimonial}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
