"use client";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function CardDeck() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const Rcontrols = useAnimation();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest >= 50) {
        // back to normal layout (real flex position)
        controls.start({
          left: "0%",
          x: 0,
          rotate: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        });
        Rcontrols.start({
        right: "0%",
        x: 0,
        rotate: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      } else {
        // overlap effect when above 50px scroll
        controls.start({
         x: "100%", rotate: -3, transition: { duration: 0.8, ease: "easeOut" },
        });
        Rcontrols.start({
        x: "-100%",
        rotate: 3,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      }
    });

    return () => unsubscribe();
  }, [scrollY, controls, Rcontrols]);

  return (
    
        <div className="h-screen bg-[#F8F8F2] flex justify-center p-[40px] box-border">
      <div className="w-full min-h-[300px] max-h-[555px] flex  justify-center gap-10">
        {/* Left Card */}
        <motion.div
          className="flex-1 min-h-[350px] bg-black rounded-[40px] flex flex-col justify-between text-yellow-300 text-4xl font-bold shadow-xl p-[40px]"
         initial={{ x: "100%", rotate: -3 }}    
          animate={controls}
        >
          <div>
            <Image
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg"
              height={74}
              width={74}
            />
          </div>
          <div className="w-full max-w-[331px] text-[36px] text-[#ffff]">
            Empowering Creators.
          </div>
        </motion.div>

        {/* Center Card */}
        <motion.div
          className="flex-1 min-h-[350px] bg-black rounded-[40px] flex flex-col justify-between text-yellow-300 text-4xl font-bold shadow-xl p-[40px] z-10"
        >
          <div>
            <Image
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg"
              height={74}
              width={74}
            />
          </div>
          <div className="w-full max-w-[331px] text-[36px] text-[#ffff]">
            Transforming Publishing.
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="flex-1 min-h-[350px] bg-black rounded-[40px] flex flex-col justify-between text-yellow-300 text-4xl font-bold shadow-xl p-[40px]"
          initial={{ x: "-100%", rotate: 3 }}
          animate={Rcontrols}
        >
          <div>
            <Image
              src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg"
              height={74}
              width={74}
            />
          </div>
         <div className="w-full max-w-[331px] text-[36px] text-[#ffff]">
            Reclaiming Canadian Media.
          </div>
        </motion.div>
      </div>
    </div>
   
  );
}
