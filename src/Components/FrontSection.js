"use client";
import React from "react";
import { Inter_Tight } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function FrontSection() {
  return (
    <div className="w-full flex items-end p-10 text-black">
      <div className="w-full h-[50vh] flex items-end justify-between min-h-[288px]">
        <motion.div
          initial={{ y: 2, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`max-w-[1097px] text-[144px] font-normal leading-none flex items-end ${interTight.className}`}
        >
          The Future of News Starts Here
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        >
          <Image
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
            alt="arrow"
            width={230}
            height={171}
            className="w-[230px] h-[171px] object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
