"use client";

// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import Link from "next/link";

const links = [
  {
    href: "/adventures",
    label: "Adventures",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/merchandise",
    label: "Merchandise",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Nav = () => {
  const [selected, setSelected] = useState("");

  return (
    <nav
      className={`flex justify-between items-center flex-row w-full h-28 px-8 py-8 background-transparent`}
    >
      <Link
        href={"/"}
        className="relative h-full flex items-center font-anton tracking-widest text-2xl uppercase"
        onClick={() => setSelected("")}
      >
        gravel and pavé
      </Link>

      {links.map((link, index) => (
        <Link
          href={link.href}
          className={`cursor-pointer relative h-full flex items-center`} // Added h-full, flex, and items-center
          key={index}
          onClick={() => setSelected(link.href)}
        >
          {link.label}
          {link.href === selected && (
            <div
              layoutId="underline"
              className={`left-0 block h-[1px] w-full`}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
