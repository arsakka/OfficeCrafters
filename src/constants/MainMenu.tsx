import { CgHomeAlt } from "react-icons/cg";
import {
    MdOutlineDesignServices,
    MdOutlineMedicalInformation,
} from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { PiMountainsLight } from "react-icons/pi";

export const MainMenu = [
    {
        icon: <CgHomeAlt />,
        label: "Home",
        url: "/",
    },
    {
        icon: <MdOutlineDesignServices />,
        label: "Services",
        url: "/services",
    },
    {
        icon: <MdOutlineMedicalInformation />,
        label: "About",
        url: "/about",
    },
    {
        icon: <PiMountainsLight />,
        label: "Mission",
        url: "/mission",
    },
    {
        icon: <GoGoal />,
        label: "Goal",
        url: "/goal",
    },
];
