
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
    <div className="w-full flex items-end p-5 sm:p-10 text-black z-0 ">
      <div className="w-full min-h-[40vh] md:min-h-[50vh] flex items-end  justify-start md:justify-between z-0 flex-wrap sm:flex-wrap 
      md:flex-nowrap mt-[150px] sm:mt-[0px] ">
        
        <AnimatedText
          text={sentence}
          wordSpacing="mr-2 sm:mr-8"
          className={`flex flex-wrap max-w-[1200px] text-[60px] sm:text-[60px] h-full md:text-[100px] lg:text-[144px] font-normal leading-[0.9] pt-[100px] mt-[0] ${interTight.className}`}
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
            className="w-[50px] mt-10 sm:mt-[0] lg:w-[190px] sm:w-[100px] sm:h-[70px] md:h-[170px] md:w-[270px] h-[50px] lg:h-[170px] object-contain "
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
