"use client";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const cardBaseClasses =
  "flex-1 h-[300px] sm:min-h-[385px] lg:h-[555px] bg-black rounded-[40px] flex flex-col justify-between shadow-xl p-[40px]";

function Card({ icon, text, animate, initial, className = "" }) {
  // Use motion.div only if animate is provided
  const Tag = animate ? motion.div : "div";

  return (
    <Tag className={`${ cardBaseClasses} ${className}`} initial={initial} animate={animate}>
      <Image src={icon} height={74} width={74} alt={text} />
      <div className="w-full max-w-[331px] text-[25px] sm:text-[36px] text-white">{text}</div>
    </Tag>
  );
}

export default function CardDeck() {
  const { scrollY } = useScroll();
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return; 

    const unsubscribe = scrollY.on("change", (latest) => {
      const animateCards = (left, right, rotateL, rotateR) => {
        leftControls.start({
          x: left,
          rotate: rotateL,
          transition: { duration: 0.8, ease: "easeOut" },
        });
        rightControls.start({
          x: right,
          rotate: rotateR,
          transition: { duration: 0.8, ease: "easeOut" },
        });
      };

      if (latest >= 50) {
        animateCards("0%", "0%", 0, 0);
      } else {
        animateCards("100%", "-100%", -3, 3);
      }
    });

    return () => unsubscribe();
  }, [scrollY, leftControls, rightControls, isSmallScreen]);

  const cards = [
    {
      text: "Empowering Creators.",
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
      animate: isSmallScreen ? undefined : leftControls,
      initial: { x: "100%", rotate: -3 },
    },
    {
      text: "Transforming Publishing.",
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
      animate: undefined,
    },
    {
      text: "Reclaiming Canadian Media.",
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
      animate: isSmallScreen ? undefined : rightControls,
      initial: { x: "-100%", rotate: 3 },
    },
  ];

  return (
    <div className="flex justify-center p-10 bg-transparent">
      <div
        className={`pt-5 w-full  flex gap-10 overflow-x-scroll no-scrollbar ${
          isSmallScreen ? "flex-row" : "justify-center"
        }`}
      >
        {cards.map((card, i) => (
          <Card key={i} {...card} className={i === 1 && !isSmallScreen ? "z-10" : ""} />
        ))}
      </div>
    </div>
  );
}
