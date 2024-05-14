import { StaticImageData } from "next/image";

export interface ServicesListInterface {
    name: string;
    description: string;
    images: StaticImageData[];
}
