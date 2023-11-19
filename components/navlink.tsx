import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

import { NavMenu } from "@/constant";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navlink({ classname }: { classname?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      {/* Desktop NavLink */}
      <div className="hidden md:flex gap-2">
        {NavMenu.map((item) =>
          item.href ? (
            <Link key={item.title} href={item.href} className={classname}>
              {item.title}
            </Link>
          ) : (
            <div
              key={item.title}
              className="group flex items-center text-sm gap-2 px-4 py-2"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {item.title}
              <FiChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="group-hover:block hidden absolute z-10 top-[4rem] w-56 bg-white rounded-md overflow-hidden shadow-md"
              >
                {item.submenu!.map((subMenu) => (
                  <Link key={subMenu.title} href={subMenu.href}>
                    <div className="p-3 hover:bg-red-500 hover:text-white transition-colors duration-200">
                      {subMenu.title}
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          )
        )}
        <Link
          href={"/login"}
          className={cn(
            buttonVariants(),
            "bg-red-800 text-white hover:bg-red-900"
          )}
        >
          Log In
        </Link>
      </div>

      {/* Mobile Navlink */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger title="Menu">
            <AiOutlineMenu size={25} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {NavMenu.map((item) =>
              item.href ? (
                <SheetClose key={item.href} asChild>
                  <Link href={item.href} className="flex items-center">
                    <div className="w-full border-b py-4">{item.title}</div>
                  </Link>
                </SheetClose>
              ) : (
                <Accordion
                  key={item.href}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    {item.submenu!.map((subMenu) => (
                      <Link key={subMenu.href} href={subMenu.href}>
                        <AccordionContent>
                          <SheetClose>{subMenu.title}</SheetClose>
                        </AccordionContent>
                      </Link>
                    ))}
                  </AccordionItem>
                </Accordion>
              )
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
