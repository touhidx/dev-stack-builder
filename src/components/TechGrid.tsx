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
      <div>
        <h1 className="text-5xl font-bold">
          Explore the
          <span className="text-(--color-app-navy)">Technologies</span>
        </h1>
        <p className="py-3">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-4 bg-(--color-app-surface) rounded-xl gap-5  p-3">
          <div className="col-span-3">
            <Suspense fallback={<p>Loading ... ...</p>}>
              <TechCard
                techPromise={promise}
                stack={stack}
                setStack={setStack}
              ></TechCard>
            </Suspense>
          </div>
          <div className="col-span-1">
            <SideBar stack={stack} setStack={setStack}></SideBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechGrid;
