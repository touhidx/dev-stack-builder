import type { Dispatch, SetStateAction } from "react";
import type { Iprops } from "../type";
import { CiCircleRemove } from "react-icons/ci";

// import React from "react";
interface Iprop {
  stack: Iprops[];
  setStack: Dispatch<SetStateAction<Iprops[]>>;
}

const StackItem = ({ stack, setStack }: Iprop) => {
  const removeSingleStack = (tech: Iprops) => {
    const restStack = stack.filter((item) => item.name !== tech.name);
    setStack(restStack);
  };
  return (
    <div>
      {stack.map((tech) => (
        <div className="flex justify-between items-center py-2.5 border-none bg-(--color-light) shadow rounded-2xl my-2 px-2.5">
          <div className="flex justify-start items-center ">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-(--color-bg-light) border border-(--color-brand)/10">
              <img
                className="w-6 h-6 object-contain"
                src={tech.icon}
                alt={tech.name}
              />
            </div>
            <div className="ml-2">
              <p className="text-(--color-app-light) text-lg">{tech.name}</p>
              <p className="text-gray-400 text-sm">{tech.category}</p>
            </div>
          </div>
          <button
            onClick={() => removeSingleStack(tech)}
            className="btn text-red-500 font-bold text-3xl border-none rounded-full p-1"
          >
            <CiCircleRemove />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StackItem;
