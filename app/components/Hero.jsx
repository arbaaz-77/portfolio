"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  
            to-pink-400"
            >
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Arbaaz Sumar",
                1000,
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
          </h1>
          <p className="text-[#ADB7BE] text:lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptates consequuntur quidem, pariatur amet impedit reiciendis
            corporis quae placeat voluptate cumque numquam totam ratione error
            nemo aspernatur fugit deserunt distinctio?
          </p>
          <div className="">
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br
              from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Email me
            </button>
            <button
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent 
            hover:bg-slate-800 text-white bg-gradient-to-br
              from-blue-500 via-purple-500 to-pink-500 mt-3"
            >
              <span className="block bg-[#121212] hover:text-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] 
          lg:h-[400px] relative"
          >
            <Image
              src="/hero.jpg"
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
