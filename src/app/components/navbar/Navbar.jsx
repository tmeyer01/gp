import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-28 px-8 py-8 w-full">
      <h1 className="text-center font-bold md:text-2xl lg:text-4xl  ">LOGO</h1>
      <div className="flex justify-between md:gap-4 md:text-sm lg:text-lg xl:gap-5 sm:justify-end">
        <Link href="/" className="hidden md:flex">
          Home
        </Link>
        <Link href="/" className="hidden md:flex">
          About
        </Link>
        <Link href="/" className="hidden md:flex">
          Blog
        </Link>
        <Link href="/" className="hidden md:flex">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
