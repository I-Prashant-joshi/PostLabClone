"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import AboutSection from "@/Components/AboutSection";
import BuildingSection from "@/Components/BuildingSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  const { scrollY } = useScroll();

  // Control visibility between 50px → 500px
  const opacity = useTransform(scrollY, [50,200,4500], [0,1,0]);

  return (
    <div className="relative">
      {/* Main content */}
      <div
        className="relative z-20 bg-[linear-gradient(to_right,transparent_0,transparent_20%,rgb(223,223,217)_20%,rgb(223,223,217)_calc(20%+1px),transparent_calc(20%+1px),transparent_50%,rgb(223,223,217)_50%,rgb(223,223,217)_calc(50%+1px),transparent_calc(50%+1px),transparent_80%,rgb(223,223,217)_80%,rgb(223,223,217)_calc(80%+1px),transparent_calc(80%+1px),transparent_100%)] bg-[#f8f8f2]"
      >
        <Header />
        <AboutSection />
        <BuildingSection />
      </div>

      <div className="h-[80vh]"></div>

      <Footer />

      {/* Sticky Bottom Nav */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-[#383636cb] text-white rounded-full shadow-lg flex gap-14 z-50"
      >
        <button>About</button>
        <button>Contact</button>
      </motion.div>
    </div>
  );
}
