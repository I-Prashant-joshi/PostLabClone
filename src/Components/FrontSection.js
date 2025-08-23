
import { Inter_Tight } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/Common/AnimateText";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sentence = "The Future of News Starts Here";

export default function FrontSection() {
  return (
    <div className="w-full flex items-end p-10 text-black z-0">
      <div className="w-full h-[50vh] flex items-end justify-between min-h-[288px] wrap-normal z-0">
        
        <AnimatedText
          text={sentence}
          className={`flex flex-wrap max-w-[1200px] text-[144px] font-normal leading-[1] ${interTight.className}`}
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        >
          <Image
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
            alt="arrow"
            width={300}
            height={171}
            className="w-[190px] h-[170px] object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
