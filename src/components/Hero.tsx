import React from "react";
import HeroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="grid  grid-cols-3   ">
        <div className="col-span-2 justify-center items-center pt-30">
          <h1 className="text-(--color-app-navy) text-5xl font-extrabold pb-7">
            Build Your Ideal
            <span className="block bg-linear-to-r from-[#3F72AF] via-[#315F99] to-[#112D4E]  bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-(--color-app-navy) w-120 pb-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div>
            <button className=" mr-3 text-sm bg-(--color-app-primary) text-(--color-app-bg) hover:bg-(--color-app-navy) px-3 py-2 rounded-2xl">
              Explore Technologies
            </button>
            <button className="text-sm px-10 py-2 rounded-2xl bg-(--color-app-surface) text-(--color-app-navy) border border-(--color-app-primary/20)">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
