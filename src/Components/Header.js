"use client";
import React, { useEffect, useState } from "react";
import ExpandingCards from "@/Components/BlockSection";
import FrontSection from "@/Components/FrontSection";
import { motion, useScroll, useTransform } from "framer-motion";
import TopNav from "./topNav";

function Header() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCoords({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative w-full flex flex-col z-20 ">
      <motion.div
        style={{
          opacity, 
          background: coords.x
            ? `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(246,232,13,0.8) 0.4%, rgba(255,255,255,0) 50%)`
            : "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "40%",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 pointer-events-none"
      />
  <TopNav />
      <FrontSection />
      <ExpandingCards />
    </div>
  );
}

export default Header;
