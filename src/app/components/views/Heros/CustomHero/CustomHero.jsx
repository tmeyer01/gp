"use client";

//next image
import Image from "next/image";

//components

//frmaer motion
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

//variants
import { fadeIn } from "../../../../../../variants";

const CustomHero = ({ backgroundImage, title }) => {
  console.log("backgroundImage", backgroundImage);

  return (
    <motion.section
      className={` bg-${backgroundImage} relative bg-fixed bg-cover w-full bg-center bg-no-repeat h-[60vh]`}
    >
      <motion.div
        transition={{ delay: 0.7 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className=" absolute bottom-3 right-4 text-white uppercase text-3xl"
      >
        {title}
      </motion.div>
    </motion.section>
  );
};

export default CustomHero;
