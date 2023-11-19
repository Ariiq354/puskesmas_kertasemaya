"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
import { AiOutlineMenu } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div className="flex py-4 xl:px-10 px-2 justify-between items-center shadow-md sticky top-0 bg-white select-none z-10">
      <Link href="/" passHref>
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
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/profil" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Profil
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Informasi</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 w-[250px] grid">
                <Link href="/pelayanan24" className="rounded w-full">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    Pelayanan UKPP
                  </NavigationMenuLink>
                </Link>
                <Link href="/pengembangan" className="rounded w-full">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    Pelayanan UKM Pengembangan
                  </NavigationMenuLink>
                </Link>
                <Link href="/esensial" className="rounded w-full">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    Pelayanan UKM Essensial
                  </NavigationMenuLink>
                </Link>
                <Link href="/inovasi" className="rounded w-full">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    Inovasi Puskesmas
                  </NavigationMenuLink>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/berita" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Berita
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/galeri" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Galeri
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/hubungikami" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Hubungi Kami
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Log In
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Menubar className="md:hidden block border-0">
        <MenubarMenu>
          <MenubarTrigger title="Menubar">
            <AiOutlineMenu size={20} />
          </MenubarTrigger>
          <MenubarContent>
            <Link href="/profil" passHref>
              <MenubarItem>Profil</MenubarItem>
            </Link>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Informasi</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href="/pelayanan24" passHref>
                  <MenubarItem>Pelayanan UKPP</MenubarItem>
                </Link>
                <Link href="/esensial" passHref>
                  <MenubarItem>Pelayanan UKM Essensial</MenubarItem>
                </Link>
                <Link href="/pengembangan" passHref>
                  <MenubarItem>Pelayanan UKM Pengembangan</MenubarItem>
                </Link>
                <Link href="/inovasi" passHref>
                  <MenubarItem>Inovasi Puskesmas</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <Link href="/berita" passHref>
              <MenubarItem>Berita</MenubarItem>
            </Link>
            <Link href="/galeri" passHref>
              <MenubarItem>Galeri</MenubarItem>
            </Link>
            <Link href="/hubungikami" passHref>
              <MenubarItem>Hubungi Kami</MenubarItem>
            </Link>
            <Link href="/login" passHref>
              <MenubarItem>Log In</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
