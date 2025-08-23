import AnimatedText from "@/Common/AnimateText";
import ScrollFadeText from "@/Common/ScrollFadeText";
import { build, home, media, post } from "@/Constants";
import React from "react";
import Image from "next/image";

function BuildingSection() {
  return (
    <div className="w-full">
      <div className="pl-[40px] pt-[100px] pb-[100px] w-[80%] lg:w-[60%] leading-tight md:leading-[150px]">
        <AnimatedText
          text={build}
          className="flex text-[60px] md:text-[100px] xl:text-[144px] whitespace-nowrap "
        />
      </div>

      <div
        className="relative flex pt-[220px] pb-[220px] justify-center w-full items-center box-border 
             border-t border-t-[rgba(223,223,217,0.77)]"
      >
        <div className="flex w-full justify-center ">
          <div className="w-[60%] justify-center ">
            <div className="relative max-w-[650px] flex">
              <Image
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg"
                loading="lazy"
                alt="logo"
                width={147}
                height={149}
                className="absolute z-0 top-[-30px] left-[-73px]"
              />
              <AnimatedText
                text={media}
                wordSpacing={"mr-2"}
                className="text-[12px] md:text-[36px] z-10 leading-tight pl-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex pt-[220px] pb-[220px] justify-center w-full items-center box-border 
            "
      >
        <div className="flex w-full justify-end ">
          <div className="w-[50%]">
            <div className="relative max-w-[650px] flex">
              <Image
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267094af8c90b6a17e323a_icon-2-transparent.svg"
                loading="lazy"
                alt="logo"
                width={147}
                height={149}
                className="absolute z-0 top-[-30px] left-[-73px]"
              />
              <AnimatedText
                text={post}
                wordSpacing={"mr-2"}
                className="text-[12px] md:text-[36px] z-10 leading-tight pl-1"
              />
            </div>
          </div>
        </div>
      </div>

       <div
        className="relative flex pt-[220px] pb-[220px] justify-center w-full items-center box-border 
             "
      >
        <div className="flex w-full justify-center ">
          <div className="w-[60%] justify-center ">
            <div className="relative max-w-[650px] flex">
              <Image
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg"
                loading="lazy"
                alt="logo"
                width={147}
                height={149}
                className="absolute z-0 top-[-30px] left-[-73px]"
              />
              <AnimatedText
                text={home}
                wordSpacing={"mr-2"}
                className="text-[12px] md:text-[36px] z-10 pl-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingSection;
