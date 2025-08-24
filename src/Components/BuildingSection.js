"use client";
import React from "react";
import Image from "next/image";
import "../app/globals.css";
import AnimatedText from "@/Common/AnimateText";
import { buidId, build, builders, home, invest, investID, media, post } from "@/Constants";

function BuildingSection() {
  const sections = [
    {
      text: media,
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg",
      wrapperWidth: "w-[60%]",
      justify: "justify-center",
      textClass: "leading-tight",
      hasBorder: true,
    },
    {
      text: post,
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267094af8c90b6a17e323a_icon-2-transparent.svg",
      wrapperWidth: "w-[50%]",
      justify: "justify-end",
      textClass: "leading-tight",
      hasBorder: false,
    },
    {
      text: home,
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg",
      wrapperWidth: "w-[60%]",
      justify: "justify-center",
      textClass: "",
      hasBorder: false,
    },
  ];
   const sections2 = [
       {
      heading:"For Investors",
      text: invest,
      id:investID,
      wrapperWidth: "w-[50%]",
      justify: "justify-start",
      textClass: "leading-tight  pl-[40px]",
      hasBorder: false,
    },
    {
      heading:"For Builders",
      text: builders,
      id: buidId,
      wrapperWidth: "w-[50%]",
      justify: "justify-end",
      textClass: "leading-tight",
      hasBorder: true,
    },
 
   
  ];

  return (
    <div className="w-full bg-fade-bottom">
   
      <div className="pl-[40px] pt-[100px] pb-[100px] w-[80%] lg:w-[60%] leading-tight md:leading-[150px]">
        <AnimatedText
          text={build}
          className="flex text-[60px] md:text-[100px] xl:text-[144px] whitespace-nowrap"
        />
      </div>

      {sections.map((section, i) => (
        <div
          key={i}
          className={`relative flex pt-[220px] pb-[100px] w-full items-center box-border 
            ${section.justify} ${section.hasBorder ? "border-t border-t-[rgba(223,223,217,0.77)]" : ""}`}
        >
          <div className={`flex w-full ${section.justify}`}>
            <div className={section.wrapperWidth}>
              <div className="relative max-w-[650px] flex">
                <Image
                  src={section.icon}
                  loading="lazy"
                  alt="icon"
                  width={147}
                  height={149}
                  className="absolute z-0 top-[-30px] left-[-73px]"
                />
                <AnimatedText
                  text={section.text}
                  wordSpacing="mr-2"
                  className={`text-[12px] md:text-[36px] z-10 pl-1 ${section.textClass}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {sections2.map((section, i) => (
        <div
          key={i}
          className={`relative flex pt-[220px] pb-[100px] w-full items-center box-border 
            ${section.justify} ${section.hasBorder ? "border-t border-t-[rgba(223,223,217,0.77)]" : ""}`}
        >
          <div className={`flex w-full ${section.justify}`}>
            <div className={section.wrapperWidth}>
              <div className=" relative flex flex-col gap-4">
                <AnimatedText
                  text={section.heading}
                  wordSpacing="mr-2"
                  className={`text-[12px] max-w-[700px]  md:text-[116px] z-10 pl-1 ${section.textClass}`}
                />
                 <AnimatedText
                  text={section.text}
                  wordSpacing="mr-2"
                  className={`text-[6px] max-w-[660px]  md:text-[16px] z-10 pl-1 ${section.textClass}`}
                />
                 <AnimatedText
                  text={section.id  }
                  wordSpacing="mr-2"
                  className={`text-[8px] md:text-[26px] z-10 pl-1 ${section.textClass}`}
                />

              </div>
            </div>
          </div>
        </div>
      ))}
       <div className="fixed z-20 mt-screen bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Ready to Build the Future?</h1>
      <div className="flex gap-6">
        <a href="#" className="underline">About</a>
        <a href="#" className="underline">Contact</a>
        <a href="#" className="underline">Privacy Policy</a>
      </div>
      <div className="mt-8">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-transparent border-b border-white focus:outline-none text-center"
        />
      </div>
    </div>
    </div>
  );
}

export default BuildingSection;
