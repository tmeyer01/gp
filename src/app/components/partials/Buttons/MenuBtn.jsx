import React, { useContext } from "react";

import { NavContext } from "@/context/NavContext";

const MenuBtn = ({ itemColor }) => {
  const { setIsOpen } = useContext(NavContext);

  console.log("-------->", itemColor);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className={`group flex flex-col gap-y-2 py-8 cursor-pointer xl:hidden group items-end`}
    >
      <div
        className={`w-7 group-hover:w-6 h-[2px] transition-all bg-${itemColor}`}
      ></div>
      <div
        className={`w-7 group-hover:w-6 h-[2px] transition-all  bg-${itemColor}`}
      ></div>
      <div
        className={`w-7 group-hover:w-6 h-[2px] transition-all  bg-${itemColor} `}
      ></div>
    </div>
  );
};

export default MenuBtn;
