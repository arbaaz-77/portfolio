import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const SocialLinks = () => {
  return (
    <ul className="flex space-x-8">
      <li>
        <Link
          href={"https://github.com/arbaaz-77"}
          target="_blank"
          className="text-2xl text-slate-300 font-semibold hover:text-white"
        >
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.linkedin.com/in/arbaaz-sumar/"}
          target="_blank"
          className="text-2xl text-slate-300 font-semibold hover:text-white"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.frontendmentor.io/profile/arbaaz-77"}
          target="_blank"
          className="text-2xl text-slate-300 font-semibold hover:text-white"
        >
          <SiFrontendmentor />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
