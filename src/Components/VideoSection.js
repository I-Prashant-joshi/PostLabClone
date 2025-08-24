"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -120, -240]);

  const scaleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.3]);
  const creatorsOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.65], [0.3, 1, 0.3]);
  const canadaOpacity = useTransform(scrollYProgress, [0.65, 0.85, 1], [0.3, 1, 1]);


const video1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0.5]);
const video2Opacity = useTransform(scrollYProgress, [0.25, 0.45, 0.5], [0, 1, 0.5]);
const video3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 5]);


  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <motion.video
          className="absolute w-full h-full object-cover"
          style={{ opacity: video1Opacity }}
          autoPlay muted loop
        >
          <source src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F6827802fb93caba00853824a_video2-transcode.mp4" type="video/mp4" />
        </motion.video>
        <motion.video
          className="absolute w-full h-full object-cover"
          style={{ opacity: video2Opacity }}
          autoPlay muted loop
        >
          <source src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682dd7a24d93a7df690274d9_post-labs-video-3-transcode.mp4" type="video/mp4" />
        </motion.video>
        <motion.video
          className="absolute w-full h-full object-cover"
          style={{ opacity: video3Opacity }}
          autoPlay muted loop
        >
          <source src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4" type="video/mp4" />
        </motion.video>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center pl-10 text-6xl font-bold text-white">
          <span className="text-gray-200">Built for&nbsp;</span>

          {/* Text block */}
          <motion.div style={{ y: textY }} className="flex flex-col space-y-6 leading-[1.2] translate-y-25">
            <motion.span style={{ opacity: scaleOpacity }} className="text-white">
              Scale
            </motion.span>
            <motion.span style={{ opacity: creatorsOpacity }} className="text-white">
              Creators
            </motion.span>
            <motion.span style={{ opacity: canadaOpacity }} className="text-white">
              Canada
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
