"use client";
import React, { useEffect } from "react";
import ScrollFadeText from "../Common/ScrollFadeText";
import { aboutText } from "../../src/Constants.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


function AboutSection() {
  const { scrollY } = useScroll();

  const targetScale = useTransform(scrollY, [1750, 2200], [0.52, 1]);

  const scale = useSpring(targetScale, {
    stiffness: 200,
    damping: 50,
    mass: 0.5,
  });

  const borderRadius = useTransform(scrollY, [1800, 2200], ["100px", "0px"]);


  return (
    <div className=" relative z-40 bg-transparent">
      <div className="w-full flex justify-center items-center pt-[400px] pb-[150px] box-border z-50">
        <div className="flex justify-center items-center w-full p-[40px]">
          <div className="w-[300px] md:w-[554px] h-full text-[30px] md:text-[52px] flex justify-center items-center leading-tight">
            <ScrollFadeText text={aboutText} className="flex flex-wrap justify-center text-center " />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <motion.video
          style={{ scale, borderRadius }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.mp4"
            type="video/mp4"
          />
        </motion.video>
      </div>
    </div>
  );
}

export default AboutSection;
