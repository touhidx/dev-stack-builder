// import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import type { Iprops } from "../type";
import { use } from "react";
interface Iprop {
  techPromise: Promise<Iprops[]>;
}

const TechCard = ({ techPromise }: Iprop) => {
  const technologies = use(techPromise);
  return (
    <div className="grid grid-cols-3 gap-3">
      {technologies.map((tech) => (
        <div className="bg-white col-span-1 border border-neutral-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-sky-50 text-sky-500">
              <img className="w-6 h-6" src={tech.icon} alt="" />
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-50 text-sky-600">
              {tech.badge}
            </span>
          </div>
          <h3 className="text-base font-semibold  mb-1.5 text-(--color-app-navy) ">
            {tech.name}
          </h3>
          <p className="text-sm text-(--color-app-navy) leading-relaxed mb-4 flex-1">
            {tech.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
            <span className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md font-medium">
              {tech.category}
            </span>
            <span>{tech.difficulty}</span>
            <span className="flex items-center gap-1 ml-auto">
              <IoIosStarOutline className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-neutral-700 font-medium">
                {tech.rating}
              </span>
            </span>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-(--color-app-navy) text-(--color-app-bg) hover:bg-(--color-app-primary) text-sm font-medium   ">
            Add to Stack
          </button>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
