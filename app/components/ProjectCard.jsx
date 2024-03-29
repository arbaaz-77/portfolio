import Link from "next/link";
import React from "react";
import { FaCode, FaEye } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, desc, tags, gitUrl, liveUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full 
          bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
        >
          <Link
            href={liveUrl}
            target="_blank"
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaEye
              className="h-10 w-10 text-[#ADB7BE] absolute top-1/2
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
            />
          </Link>
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaCode
              className="h-10 w-10 text-[#ADB7BE] absolute top-1/2
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-md text-[#ADB7BE]">{desc}</p>
        <ul className="flex justify-between text-black mt-4">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-purple-300 py-1 px-2 rounded-full text-sm font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
