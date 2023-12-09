"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";
import Nav from "@/app/components/sections/Nav/Nav";

// components

const Header = ({ params }) => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [textColor, setTextColor] = useState("");
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
      setTextColor("text-white");
    } else if (pathname === "/blog") {
      setTextColor("text-red-500");
    } else if (pathname === "/adventure") {
      setTextColor("text-purple-500");
    }
  }, [pathname]);

  return (
    <header
      className={`sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl max-w-screen-2xl w-full lg:px-10 xl:px-10 ml-auto mr-auto fixed z-50 border-solid transition-all content-center h-28 ${textColor} ${
        activeScroll ? `bg-[#030315] py-8` : `bg-transparent py-8`
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <Nav />
      </div>
    </header>
  );
};

export default Header;