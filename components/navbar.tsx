"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Navlink from "@/components/navlink";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex py-4 xl:px-10 px-2 justify-between items-center shadow-md sticky top-0 bg-white select-none z-10">
      <Link href="/">
        <div className="inline-flex items-center text-primary-color md:ml-10 ml-5">
          <Image
            src="/lambang.png"
            className="mr-2 w-auto h-auto"
            alt=""
            width={40}
            height={40}
          ></Image>
          <Image src="/logo.png" alt="" width={40} height={40}></Image>
          <h1 className="font-bold cursor-pointer xl:text-2xl text-lg ml-4">
            UPTD PUSKESMAS KERTASEMAYA
          </h1>
        </div>
      </Link>
      <Navlink
        classname={cn(
          buttonVariants({ variant: "ghost" }),
          "hover:bg-red-900 hover:text-white"
        )}
      />
    </div>
  );
}
