"use client"
import React from 'react'
import { Inter_Tight } from "next/font/google";
import useLenis from "@/Common/useLenisHook";
import { motion } from "framer-motion";
import Image from 'next/image';

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function TopNav() {
  useLenis()

  return (
    <div className="border-b border-[rgb(223,223,217)] z-0">
      {/* Top black bar */}
      <div className="bg-black text-white h-[46px] w-full pl-5 pr-5">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex justify-center items-center h-full text-[14px] sm:text-[16px] font-normal px-2 text-center ${interTight.className}`}
        >
          Help shape the future of digital journalism — we’re hiring!
        </motion.span>
      </div>

      {/* Main nav section */}
      <div className="text-black w-full flex justify-center items-center bg-transparent">
        <div className="w-full px-4 sm:px-6 md:px-10 flex sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-transparent py-4 flex-nowrap ">
          
          {/* Logo */}
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-[16px] w-full font-normal ${interTight.className}`}
          >
            <Image
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg"
              loading="lazy"
              alt="logo"
              width={150}
              height={21}
              className="w-[120px] sm:w-[150px] h-auto"
            />
          </motion.span>

          {/* Tagline */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={` text-[14px] sm:text-[14px] md:text-[16px]  font-normal max-w-[395px] box-border pl-[40px]  sm:pl-[0px] leading-tight ${interTight.className}`}
          >
            We’re building the backbone of Canadian digital media — a next-gen platform that gives creators the tools to thrive.
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
