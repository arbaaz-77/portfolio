import React from "react";
import Link from "next/link";

const NavLink = ({ name }) => {
  let linkName = name.toUpperCase();
  return (
    <Link
      href={`#${name}`}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl 
                rounded md:p-0 hover:text-white"
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
