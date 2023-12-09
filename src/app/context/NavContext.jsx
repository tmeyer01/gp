"use client";
import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navColor, setNavColor] = useState(false);

  return (
    <NavContext.Provider
      value={{ isOpen, setIsOpen }}
      // colorValue={{ navColor, setNavColor }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
