"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

import AboutSection from "@/Components/AboutSection";
import BuildingSection from "@/Components/BuildingSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [50, 200, 4500], [0, 1, 0]);

  const [active, setActive] = useState("About");

  return (
    <div className="relative">
     <div
        className="relative z-20
        bg-[linear-gradient(to_right,transparent_0,transparent_10%,rgb(223,223,217)_10%,rgb(223,223,217)_calc(10%+1px),transparent_calc(10%+1px),transparent_44.2%,rgb(223,223,217)_45%,rgb(223,223,217)_calc(35%+1px),transparent_calc(35%+1px),transparent_90%,rgb(223,223,217)_91%,rgb(223,223,217)_calc(25%+1px),transparent_calc(20%+1px),transparent_20%)]
        
        sm:bg-[linear-gradient(to_right,transparent_0,transparent_20%,rgb(223,223,217)_20%,rgb(223,223,217)_calc(20%+1px),transparent_calc(20%+1px),transparent_50%,rgb(223,223,217)_50%,rgb(223,223,217)_calc(50%+1px),transparent_calc(50%+1px),transparent_80%,rgb(223,223,217)_80%,rgb(223,223,217)_calc(80%+1px),transparent_calc(80%+1px),transparent_100%)]
        
        bg-[#f8f8f2]"
      >
        <Header />
        <AboutSection />
        <BuildingSection />
      </div>

      <div className="h-[80vh]"></div>

      <Footer />

      <motion.div
        style={{ opacity }}
        className=" fixed bottom-6 left-1/2 -translate-x-1/2 px-1 py-1 bg-[#383636cb] rounded-full shadow-lg flex w-[220px] h-12 z-50"
      >
        <motion.div
          layout
          className="absolute top-1 left-1 h-10 w-1/2 bg-white rounded-full"
          initial={false}
          animate={{ x: active === "About" ? 0 : 110 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <button
          onClick={() => setActive("About")}
          className={`relative z-10 flex-1 text-center font-medium ${
            active === "About" ? "text-black" : "text-white"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActive("Contact")}
          className={`relative z-10 flex-1 text-center font-medium ${
            active === "Contact" ? "text-black" : "text-white"
          }`}
        >
          Contact
        </button>
      </motion.div>
    </div>
  );
}
