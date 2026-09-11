// import React from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-[rgba(249,247,247,0.75)] backdrop-blur-md ">
        <div className="flex justify-between items-center py-5 px-3 container mx-auto bg-(--app-bg)">
          <img
            className="h-8 w-30 text-(--color-brand-navy)"
            src={Logo}
            alt=""
          />

          <ul className="flex justify-between items-center  gap-8">
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
            <button className="btn mr-3 px-4 py-2 text-(--color-app-navy) hover:text-(--color-app-primary) border-none rounded-2xl">
              Sign In
            </button>
            <button className="btn px-4 py-2  bg-(--color-app-primary) text-(--color-app-bg) hover:bg-(--color-app-navy) border-none rounded-2xl">
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
