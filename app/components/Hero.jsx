"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl lg:text-6xl font-extrabold">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  
            to-pink-400"
            >
              Hello, I&apos;m{" "}
            </span>
            <br />
            Arbaaz Sumar
          </h1>
          <p className="text-[#ADB7BE] text:lg lg:text-xl mb-6">
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "React Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </p>
          <div className="">
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br
              from-blue-500 via-purple-500 to-pink-500 hover:text-slate-200 text-white"
              onClick={() => (window.location = "mailto:arbaaz970@gmail.com")}
            >
              Contact me
            </button>
            <Link
              href={
                "https://drive.google.com/file/d/1XWVEyWCCJZiPxiP8_fjZ7NVm8ip_tDgE/view?usp=sharing"
              }
              target="_blank"
            >
              <button
                className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent 
              hover:bg-slate-800 text-white bg-gradient-to-br
              from-blue-500 via-purple-500 to-pink-500 mt-3"
              >
                <span className="block bg-[#121212] hover:text-slate-300 rounded-full px-5 py-2">
                  View CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] 
          lg:h-[400px] relative"
          >
            <Image
              src="/hero.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
