"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";

// components
import Nav from "@/app/components/sections/Nav/Nav";
import NavMobile from "@/app/components/sections/Nav/NavMobile/NavMobile";
import MenuBtn from "@/app/components/partials/Buttons/MenuBtn";

const Header = ({ params }) => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [itemColor, setItemColor] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActiveScroll(window.scrollY > 5);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    //clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeScroll]);

  useEffect(() => {
    // Set text color based on the current route
    if (pathname === "/" || null) {
      setItemColor("white");
    } else if (pathname === "/adventures") {
      setItemColor("white");
    } else if (pathname === "/adventure") {
      setItemColor("purple-500");
    }
  }, [pathname]);

  return (
    <header
      className={`w-full 2xl:max-w-[105rem] fixed top-0 z-50 border-solid transition-all content-center h-28 text-${itemColor} ${
        activeScroll ? `bg-[#030315] py-8 text-white` : `bg-transparent py-8`
      }`}
    >
      {/* <div className="flex items-center justify-center h-full"> */}
      {/* <Nav
          watchingScroll={activeScroll}
          containerStyles="hidden xl:flex items-center  gap-x-8"
        /> */}
      {/* </div> */}
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between ">
        {/* nav */}
        <Nav
          watchingScroll={activeScroll}
          containerStyles="hidden xl:flex items-center gap-x-8"
        />
        {/* nav mobile */}
        <NavMobile />
        {/* nav button */}
        <div className="absolute right-7 top-[10%] xl:hidden">
          <MenuBtn itemColor={`${itemColor}`} activeScroll={activeScroll} />
        </div>
      </div>
    </header>
  );
};

export default Header;
