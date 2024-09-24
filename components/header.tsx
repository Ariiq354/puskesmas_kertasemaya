import React from "react";

import Link from "next/link";
import Image from "next/image";

import { AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="md:justify-between justify-center flex container items-center mt-1 border-b-2">
      <div className="inline-flex items-center p-2 font-bold text-xs lg:text-sm bg-blue tracking-widest">
        <div className="mr-2">
          <AiFillPhone size={20} />
        </div>
        0821-1889-4770
        <div className="mr-2 ml-4">
          <FaLocationDot />
        </div>
        Jalan By Pass, Tulungagung
      </div>
      <div className=" hidden md:flex items-center">
        <div className=" p-1 text-base mr-12 flex items-center">
          <Link
            href="https://www.facebook.com/puskesmas.kertasemaya.7"
            className="inline-flex items-center mr-6"
            target="_blank"
            aria-label="facebook link"
          >
            <Image
              src="/facebook.webp"
              width={20}
              height={20}
              alt="Facebook Icon"
            />
          </Link>
          <Link
            href="https://www.instagram.com/puskesmas_kertasemaya/"
            className="inline-flex items-center mr-6"
            target="_blank"
            aria-label="isntagram link"
          >
            <Image
              src="/instagram.webp"
              width={20}
              height={20}
              alt="Instagram Icon"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@PuskesmasKertasemaya/"
            className="inline-flex items-center"
            target="_blank"
            aria-label="youtube link"
          >
            <Image
              src="/youtube.webp"
              width={25}
              height={20}
              alt="Youtube Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
