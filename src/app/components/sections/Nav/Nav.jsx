"use client";

// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

// import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import Link from "next/link";

const links = [
  {
    href: "/adventures",
    label: "Adventures",
  },
  {
    href: "/routes",
    label: "Routes",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles, watchingScroll }) => {
  const [selected, setSelected] = useState("");

  return (
    // <nav
    //   className={`flex justify-between items-center flex-row w-full h-28 px-8 py-8 background-transparent`}
    // >
    //   <Link
    //     href={"/"}
    //     className="relative h-full flex items-center font-anton tracking-widest text-2xl uppercase"
    //     onClick={() => setSelected("")}
    //   >
    //     gravel and pavé
    //   </Link>

    //   {links.map((link, index) => (
    //     <Link
    //       href={link.href}
    //       className={`cursor-pointer relative h-full flex items-center`}
    //       key={index}
    //       onClick={() => setSelected(link.href)}
    //     >
    //       {link.label}
    //       {link.href === selected && (
    //         <div
    //           layoutId="underline"
    //           className={`left-0 block h-[1px] w-full`}
    //         />
    //       )}
    //     </Link>
    //   ))}
    // </nav>

    <nav className={`${containerStyles} justify-between w-4/5 `}>
      <Link
        href={"/"}
        className="relative flex  w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0 items-center font-anton tracking-widest text-2xl uppercase"
        onClick={() => setSelected("")}
      >
        gravel and pavé
      </Link>
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            className={`${linkStyles} cursor-pointer relative`}
            key={index}
            onClick={() => setSelected(link.href)}
          >
            {link.label}
            {link.href === selected && (
              <motion.div
                layoutId="underline"
                className={`left-0 block h-[1px] w-full ${
                  watchingScroll ? "bg-white" : "bg-black"
                }`}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
