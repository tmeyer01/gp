"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { adventureData } from "@/app/adventures/adventureData";

function Adventures() {
  return (
    <section className="flex justify-center pt-6 pb-6 bg-accent">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 w-3/4 justify-center">
        {adventureData.map((link, index) => (
          <motion.div
            transition={{ delay: index * 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={index}
          >
            <motion.div
              whileHover={{ scale: [1, 1.2, 1.1] }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-stretch"
            >
              <Link
                href={`/adventures/${link.path}`}
                adventureId={`${link.id}`}
              >
                <div className="max-w-md overflow-hidden rounded-2xl shadow-lg h">
                  <Image
                    src={link.image}
                    blurDataURL={link.image}
                    alt={link.alt}
                    width={300}
                    height={100}
                    className="w-full "
                  />
                  <div className="bg-white h-80 px-6 py-4 lg:h-52">
                    <span className="text-xl mb-1 font-anton">
                      {link.title}
                    </span>
                    <div className="pt-6">
                      <p className="font-small ">{link.discription}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Adventures;
