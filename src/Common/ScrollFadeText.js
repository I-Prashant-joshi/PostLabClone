"use client";
import React, { useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";

export default function ScrollFadeText({
  text = "This is a scrolling text reveal",
  fromOpacity = 0.2,
  toOpacity = 1,
  className = "leading-[60px]"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`${className}`}>
      {words.map((word, i) => {
        // faster stagger: smaller multiplier
        const opacity = useTransform(
          scrollYProgress,
          [i * 0.02, i * 0.02 + 0.05], // faster word animation
          [fromOpacity, toOpacity]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block"
          >
            {isInView ? word : ""}&nbsp;
          </motion.span>
        );
      })}
    </div>
  );
}
