import { StaticImageData } from "next/image";

export interface ServicesInterface {
  name: string;
  image: StaticImageData;
  description: string;
  includes: {
    label: string;
    icon: string;
  }[];
  url: string;
}
