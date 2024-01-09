"use client";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import SocialLinks from "./SocialLinks";

const linkNames = ["projects", "about"];

const Navbar = () => {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <SocialLinks />
        <div className="mobile-menu block md:hidden">
          {isNavbarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded 
            border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setisNavbarOpen(false)}
            >
              <MdClose />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded 
            border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setisNavbarOpen(true)}
            >
              <MdMenu />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {linkNames.map((link, index) => (
              <li key={index}>
                <NavLink name={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen && <MenuOverlay links={linkNames} />}
    </nav>
  );
};

export default Navbar;
