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

export const NavMenu = [
  {
    title: "Profil",
    href: "/profil",
  },
  {
    title: "Informasi",
    href: null,
    submenu: [
      {
        title: "Pelayanan UKPP",
        href: "/pelayanan24",
      },
      {
        title: "Pelayanan UKM Pengembangan",
        href: "/pengembangan",
      },
      {
        title: "Pelayanan UKM Esensial",
        href: "/esensial",
      },
      {
        title: "Inovasi Puskesmas",
        href: "/inovasi",
      },
    ],
  },
  {
    title: "Berita",
    href: "/berita",
  },
  {
    title: "Galeri",
    href: "/galeri",
  },
  {
    title: "Hubungi Kami",
    href: "/hubungikami",
  },
];
