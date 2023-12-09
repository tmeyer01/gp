"use client";
import React from "react";
import { NavContext } from "@/context/NavContext";
import NavWhiteSpace from "@/app/components/sections/Nav/NavWhiteSpace/NavWhiteSpace";
import CustomHero from "@/app/components/views/Heros/CustomHero/CustomHero";
import Adventures from "@/app/components/views/Adventures/Adventures";

function about() {
  const backgroundImage = "heroAdventures";
  const title = "Adventures";
  return (
    <>
      <CustomHero backgroundImage={backgroundImage} title={title} />
      <Adventures />
    </>
  );
}

export default about;
