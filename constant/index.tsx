import { BiClinic, BiSolidReport } from "react-icons/bi";
import { BsSoundwave, BsVirus } from "react-icons/bs";
import { MdElderly, MdFamilyRestroom, MdReport } from "react-icons/md";
import {
  FaTooth,
  FaPeopleCarry,
  FaBaby,
  FaLungsVirus,
  FaAmbulance,
  FaBed,
  FaUserMd,
  FaHome,
  FaShieldVirus,
} from "react-icons/fa";
import { TbBabyCarriage } from "react-icons/tb";

import { ScrollText } from "lucide-react";
import { BiHome, BiImageAdd, BiVideoPlus } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";

export const Menus = [
  { title: "Dashboard", src: <BiHome size={25} />, href: "/dashboard" },
  {
    title: "Photo",
    src: <BiImageAdd size={25} />,
    href: "/dashboard/foto",
    gap: true,
  },
  {
    title: "Video ",
    src: <BiVideoPlus size={25} />,
    href: "/dashboard/video",
  },
  {
    title: "News ",
    src: <HiOutlineNewspaper size={25} />,
    href: "/dashboard/berita",
  },
];
