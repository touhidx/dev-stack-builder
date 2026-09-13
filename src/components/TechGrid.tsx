// import React from "react";
import { Suspense, useState } from "react";
import TechCard from "./TechCard";
import SideBar from "./SideBar";
import type { Iprops } from "../type";
const techPromise = async () => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const TechGrid = () => {
  const [promise] = useState(() => techPromise());
  const [stack, setStack] = useState<Iprops[]>([]);

  return (
    <>
      <div className="">
        <h1 className="text-5xl font-bold max-sm:text-2xl max-sm:px-3 max-sm:text-center">
          Explore the
          <span className="text-(--color-app-navy)">Technologies</span>
        </h1>
        <p className="py-3 max-sm:text-center max-sm:text-xs max-sm:py-1 max-sm:mb-2">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 bg-(--color-app-surface) rounded-xl gap-5  p-3">
          <div className="md:col-span-3 col-span-1">
            <Suspense fallback={<p>Loading ... ...</p>}>
              <TechCard
                techPromise={promise}
                stack={stack}
                setStack={setStack}
              ></TechCard>
            </Suspense>
          </div>
          <div className="md:col-span-1 col-span-1">
            <SideBar stack={stack} setStack={setStack}></SideBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechGrid;
