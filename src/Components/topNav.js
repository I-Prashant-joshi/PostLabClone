"use client"
import React from 'react'
import { Inter_Tight } from "next/font/google";
import useLenis from "@/Common/useLenisHook";

import  {motion}  from "framer-motion";
import Image from 'next/image';

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function TopNav() {
  useLenis()

  return (
    <div className='border-b-[1px] border-b-[rgb(223,223,217)] z-0'>
       <div className="bg-[#000000] text-[#FFFFFF] h-[46px] w-full">
       <motion.span
        initial={{ y: 40, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={`flex justify-center items-center h-full text-[16px] font-normal ${interTight.className}`}
      >
        Help shape the future of digital journalism — we’re hiring!
      </motion.span>
    </div>


     <div className="text-[#000000] h-[84px] w-full flex justify-center items-center bg-transparent">
          <div className="text-[#000000] h-[44.7px] w-full pl-[40px] pr-[40px] flex items-center justify-between bg-transparent ">
       <motion.span
        initial={{ y: 40, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={` text-[16px] font-normal ${interTight.className}`}
      >
        <Image src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg" loading='lazy' alt='logo' width={150} height={21} />
      </motion.span>
       <motion.div
        initial={{ y: 40, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={`w-[395px] text-[16px] font-normal ${interTight.className}`}
      >
       We’re building the backbone of Canadian digital media — a next-gen platform that gives creators the tools to thrive.
      </motion.div>
    </div>
    </div>


    </div>
  )
}

export default TopNav