"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollFadeText({
  text = "This is a scrolling text reveal",
  start = 750,
  end = 800,
  fromOpacity = 0.2,
  toOpacity = 1,
  className = "leading-[60px]"
}) {
  const { scrollY } = useScroll();

  const words = text.split(" ");

  return (
    <div
      className={`${className}`}
    >
      {words.map((word, i) => {
        const delay = i * 38; // stagger each word’s scroll timing
        const opacity = useTransform(
          scrollY,
          [start + delay, end + delay],
          [fromOpacity, toOpacity]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </div>
  );
}
