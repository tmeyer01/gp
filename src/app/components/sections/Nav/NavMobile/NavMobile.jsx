"use client";

import React, { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";

import { NavContext } from "@/context/NavContext";

// components
import Nav from "../Nav";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
    <nav
      className={`${isOpen ? "right-0" : "-right-full"}
        xl:hidden fixed bg-black w-full top-0 z-20 bottom-0 transition-all duration-500  py-12 `}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <div
        className="flex h-full self-center py-6 justify-center "
        onClick={() => setIsOpen(false)}
      >
        <Nav containerStyles="flex  flex-col text-[30px] uppercase bg-black  h-full items-center justify-center gap-y-6" />
      </div>
    </nav>
  );
};

export default NavMobile;
