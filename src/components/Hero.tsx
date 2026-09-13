// import React from "react";
import HeroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="grid  grid-cols-3  max-sm:grid-cols-1 ">
        <div className="col-span-2 justify-center items-center max-sm:pt-7 pt-30 max-sm:col-span-1 ">
          <h1 className="text-(--color-app-navy) md:text-5xl text-2xl max-sm:text-center font-extrabold max-sm:pb-2 pb-7">
            Build Your Ideal
            <span className="block bg-linear-to-r from-[#3F72AF] via-[#315F99] to-[#112D4E]  bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-(--color-app-navy) max-sm:p-4 max-sm:text-xs w-120 max-sm:w-full max-sm:pb-2 pb-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:p-3">
            <button className="mr-3 max-sm:mr-1 text-sm bg-(--color-app-primary) text-(--color-app-bg) hover:bg-(--color-app-navy) px-3 py-2 rounded-2xl">
              Explore Technologies
            </button>
            <button className="text-sm px-10 py-2 rounded-2xl bg-(--color-app-surface) text-(--color-app-navy) border border-(--color-app-primary/20)">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-1 max-sm:w max-sm:h-70 flex justify-center items-center ">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
