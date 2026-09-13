// import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-[rgba(249,247,247,0.75)] backdrop-blur-md">
        <div className="flex justify-around  items-center sm:py-5 sm:px-3 py-3 px-2 container mx-auto bg-(--app-bg)">
          <div>
            <button className="btn">
              <IoReorderThreeOutline />
            </button>
          </div>
          <img
            className="h-8 w-30  text-(--color-brand-navy)"
            src={Logo}
            alt=""
          />

          <ul className="hidden sm:flex justify-between items-center  gap-8 ">
            <li className="text-(--color-app-navy) font-bold">Home</li>
            <li className="text-(--color-app-navy) hover:font-bold cursor-pointer">
              Technologies
            </li>
            <li className="text-(--color-app-navy) hover:font-bold cursor-pointer">
              Projects
            </li>
            <li className="text-(--color-app-navy) hover:font-bold cursor-pointer">
              About
            </li>
            <li className="text-(--color-app-navy) hover:font-bold cursor-pointer">
              Contact
            </li>
          </ul>

          <div>
            <button className="btn sm:mr-3 sm:px-4 sm:py-2 mr-1 px-2 py-1 max-sm:text-[8px] text-(--color-app-navy) hover:text-(--color-app-bg) border-none rounded-xl">
              Sign In
            </button>
            <button className="btn px-4 py-2 max-sm:px-2 max-sm:py-.25 max-sm:text-[8px] bg-(--color-app-primary) text-(--color-app-bg) hover:bg-(--color-app-navy) border-none rounded-xl">
              Sign Up
            </button>
          </div>
        </div>
        <hr className="text-(--color-app-navy)" />
      </div>
    </>
  );
};

export default Navbar;
