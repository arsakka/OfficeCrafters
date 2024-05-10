import { StaticImageData } from "next/image";

export interface TestimonialInterface {
  image: StaticImageData;
  name: string;
  testimonial: string;
  stars: number;
}
