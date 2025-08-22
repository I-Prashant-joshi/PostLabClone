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
        controls.start({
          x: -500,
          rotate: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
        Rcontrols.start({
          x: 500,
          rotate: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      } else {
        controls.start({
          x: -40,
          rotate: -3,
          transition: { duration: 0.5, ease: "easeOut" },
        });
        Rcontrols.start({
          x: 40,
          rotate: 3,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }
    });

    return () => unsubscribe();
  }, [scrollY, controls]);
  return (
    <div className="h-screen bg-[#F8F8F2]  flex justify-center p-[40px] box-border">
      <div className="w-full h-[500px] flex items-center justify-center">
        {/* Left Card */}
        <motion.div
          className="absolute flex-1 min-h-[350px] bg-black rounded-[40px] flex  text-yellow-300 text-4xl font-bold shadow-xl z-0 p-[40px]"
          initial={{ x: -30, rotate: -3 }}
          animate={controls}
        >
          <div className="flex flex-col justify-between">
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
          </div>
        </motion.div>
        <motion.div className="absolute flex-1  min-h-[350px] bg-black rounded-[40px] flex  text-yellow-300 text-4xl font-bold shadow-xl z-10 p-[40px]">
          <div className="flex flex-col justify-between">
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
          </div>
        </motion.div>
        <motion.div
          className="absolute flex-1 min-h-[350px] bg-black rounded-[40px] flex  text-yellow-300 text-4xl font-bold shadow-xl z-20 p-[40px]"
          initial={{ x: 40, rotate: 3 }}
          animate={Rcontrols}
        >
          <div className="flex flex-col justify-between">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
