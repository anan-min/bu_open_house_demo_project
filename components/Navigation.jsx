"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "@/components/navbar/HamburgerButton";
import NavLinks from "@/components/navBar/NavLinks";

const Navigation = () => {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (isToggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <nav className="bg-black fixed w-full z-30 top-0 start-0 border-b">
        <div className="max-w-screen flex items-center justify-between mx-auto p-6">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center font-semibold whitespace-nowrap text-white text-4xl">
              BU OPEN
            </span>
          </Link>

          <HamburgerButton onClick={handleToggle} />

          {/* mobile menu  */}
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-black border-l border-gray-800 transition-transform transform z-30 ${
              isToggle
                ? "translate-x-0 md:hidden"
                : "translate-x-full md:hidden"
            } `}
          >
            <ul className="flex flex-col min-h-screen space-8 space-y-12 p-6 font-medium border border-gray-800 rounded-lg md:hidden">
              <li className="flex flex-col items-end p-4">
                <HamburgerButton onClick={handleToggle} />
              </li>
              <NavLinks />
            </ul>
          </div>

          {/* desktop and tablet menu */}
          <div className="hidden w-full md:flex md:w-auto ml-auto">
            <ul className="flex space-x-8 p-4 font-medium border border-gray-800 rounded-lg bg-black md:space-x-8 md:mt-0 md:border-0 md:bg-black te">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
