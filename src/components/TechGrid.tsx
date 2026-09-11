import React from "react";
import TechCard from "./TechCard";
const techPromise = async () => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const TechGrid = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">
          Explore the
          <span className="text-(--color-app-navy)">Technologies</span>
        </h1>
        <p className="py-3">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-4 bg-(--color-app-surface) rounded-xl  p-3">
          <div className="col-span-3">
            {" "}
            <TechCard techPromise={techPromise()}></TechCard>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default TechGrid;
