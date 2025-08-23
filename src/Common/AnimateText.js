"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between letters/words
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedText({
  text,
  className,
  wordSpacing = "mr-8",
  duration = 0.8,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
      className={`flex flex-wrap ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          transition={{ duration, ease: "easeOut" }}
          className={`${wordSpacing} inline-block`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
