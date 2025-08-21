"use client"
import React from 'react'
import { Inter_Tight } from "next/font/google";

import  {motion}  from "framer-motion";
import Image from 'next/image';

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function TopNav() {
  return (
    <div>
       <div className="bg-[#000000] text-[#FFFFFF] h-[46px] w-full">
       <motion.span
        initial={{ y: 50, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={`flex justify-center items-center h-full text-[16px] font-normal ${interTight.className}`}
      >
        Help shape the future of digital journalism — we’re hiring!
      </motion.span>
    </div>


     <div className="text-[#000000] h-[84px] w-full flex justify-center items-center">
          <div className="text-[#000000] h-[44.7px] w-full pl-[40px] pr-[40px] flex items-center justify-between  ">
       <motion.span
        initial={{ y: 50, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={` text-[16px] font-normal ${interTight.className}`}
      >
        <Image src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg" loading='lazy' alt='logo' width={150} height={21} />
      </motion.span>
       <motion.div
        initial={{ y: 50, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={`w-[395px] text-[16px] font-normal ${interTight.className}`}
      >
       We’re building the backbone of Canadian digital media — a next-gen platform that gives creators the tools to thrive.
      </motion.div>
    </div>
    </div>

     <div className="text-[#000000]  w-full flex items-end bg-[red] p-[40px]">
          <div className="text-[#000000] h-[60vh] w-full flex items-end justify-between  bg-[blue] ">
            <div className=' w-full bg-[green] min-h-[288px] flex items-end justify-between '>
       <motion.div
        initial={{ y: 2, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className={`max-w-[1097px] leading-none flex items-end text-[144px] font-normal ${interTight.className}`}
      >
       The Future of News Starts Here
      </motion.div>
     <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 3, 
    repeat: Infinity, 
    ease: "easeOut",
  }}
>
          <Image src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg" loading='lazy' alt='arrow' width={166} height={167}
           className="w-[380px] h-[171px] object-contain" />
   
      </motion.div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default TopNav