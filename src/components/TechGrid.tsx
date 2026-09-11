import React from "react";

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
        <div className="grid grid-cols-4">
          <div className="col-span-3"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default TechGrid;
