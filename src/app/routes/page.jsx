import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import NavWhiteSpace from "@/app/components/sections/Nav/NavWhiteSpace/NavWhiteSpace";

function routes() {
  return (
    <>
      <NavWhiteSpace />
      <div className="w-full bg-white  space px-12">
        <h1>Routes</h1>
        <div className="flex  flex-col items-center place-self-center pb-6">
          <div className="flex  flex-col flex-wrap  justify-end  content-center w-1/2 h-64 bg-black text-white text-6xl  font-anton tracking-[5rem]  uppercase">
            {" "}
            title
          </div>
          <div className="w-1/2  bg-red-300   p-6">
            Distanstance : 100km <br />
            Location: Vancouver
          </div>
        </div>
        <div className="flex  flex-col items-center place-self-center pb-6">
          <div className="w-1/2 h-64 bg-black  "></div>
          <div className="w-1/2 h-64 bg-red-300  "></div>
        </div>
        <div className="flex  flex-col items-center place-self-center pb-6">
          <div className="w-1/2 h-64 bg-black  "></div>
          <div className="w-1/2 h-64 bg-red-300  "></div>
        </div>
      </div>
    </>
  );
}

export default routes;
