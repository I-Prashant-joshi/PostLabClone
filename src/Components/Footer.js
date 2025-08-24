"use client";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 h-[80vh] w-full bg-black text-white  z-0">
      <div className="w-full text-[80px]">
        <footer className="footer">
          <div className="marquee flex">
            <div className="marquee-inner flex text-[80px] items-center">
              <div className="marquee-text flex">
                Ready to Build the Future of Canadian Media?
                <a href="/contact-us" className="marquee-contact">
                  Contact Us
                </a>
              </div>
              <div className="marquee-arrow w-embed">
                <FiArrowDownRight />
              </div>
              <div className="marquee-text flex">
                Ready to Build the Future of Canadian Media?
                <a href="/contact-us" className="marquee-contact">
                  Contact Us
                </a>
              </div>
              <div className="marquee-arrow w-embed">
                <FiArrowDownRight />
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Right section  */}
<div className="flex justify-between pt-[10px] md:pt-[150px] flex-col md:flex-row">
    <div className="h-full flex-1 ml-[20px] md:ml-[40px]">
            <Image src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg" loading='lazy' alt='logo' width={169} height={21} />
    </div>
      <div className="flex flex-1 flex-col gap-10 pl-[20px] md:pl-[0px]">

        <div className="flex flex-col gap-0 mt-4">
          <a
            href="#"
            className="underline"
            onClick={() => {
              console.log("hell");
            }}
          >
            About
          </a>
          <a href="#" className="underline">
            Contact
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Cookie Policy
          </a>
        </div>
        <div className="w-full max-w-md ">
          <h2 className="text-white text-2xl font-medium mb-6">
            Sign Up for Our Newsletter
          </h2>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white py-2 pr-12"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl">
              &#8594;
            </button>
          </div>
        </div>
        </div>

      </div>
      <div className="fixed w-full bottom-0">
        <div className="flex justify-between items-center border-t border-gray-700 px-12 py-4 text-sm text-[#b3b3b3]">
          <p>© 2025 Post Labs, Inc. All rights reserved.</p>
          <p>Designed by HRVST.</p>
        </div>
      </div>
    </footer>
  );
}
