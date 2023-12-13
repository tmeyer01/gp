"use client";

import NavWhiteSpace from "@/app/components/sections/Nav/NavWhiteSpace/NavWhiteSpace";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedImage from "@/app/gallery/AnimatedImage";

function gallery() {
  const greyBoxHeight = 300;
  return (
    <>
      <NavWhiteSpace />
      <div className="overflow-hidden relative w-full h-[80vh]">
        {" "}
        <div
          className="overflow-hidden relative w-full border-2"
          style={{ height: "80vh" }}
        ></div>
      </div>
    </>
  );
}

export default gallery;
