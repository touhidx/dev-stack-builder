// import React from "react";
import HeroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="grid  grid-cols-3  max-sm:grid-cols-1 ">
        <div className="col-span-2 justify-center items-center max-sm:pt-7 pt-30 max-sm:col-span-1 ">
          <h1 className="text-(--color-app-navy) md:text-5xl text-2xl max-sm:text-center font-extrabold max-sm:pb-2 pb-7">
            Build Your Ideal
            <span
              className="block bg-[linear-gradient(90deg,#112D4E_0%,#3F72AF_45%,#DBE2EF_100%)]
    bg-clip-text
    text-transparent
    font-semibold  "
            >
              Development Stack
            </span>
          </h1>
          <p className="text-(--color-app-navy) max-sm:text-center max-sm:p-4 max-sm:text-xs w-120 max-sm:w-full max-sm:pb-2 pb-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:p-3">
            <button className="mr-3 max-sm:mr-1 text-sm bg-linear-to-r from-(--color-app-primary) to-(--color-app-navy) text-(--color-app-bg) hover:opacity-90 px-3 py-2 rounded-2xl transition-opacity">
              Explore Technologies
            </button>
            <button className="text-sm px-10 py-2 rounded-2xl bg-transparent text-(--color-app-navy) border border-(--color-app-primary)/40 hover:bg-(--color-app-primary)/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-1 max-sm:w max-sm:h-70 max-md:p-10 flex justify-center items-center ">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
