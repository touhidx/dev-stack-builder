import type { Dispatch, SetStateAction } from "react";
import type { Iprops } from "../type";
import StackItem from "./StackItem";

// import React from "react";
interface Iprop {
  stack: Iprops[];
  setStack: Dispatch<SetStateAction<Iprops[]>>;
}
const SideBar = ({ stack, setStack }: Iprop) => {
  console.log(stack);
  return (
    <div className=" border-(--color-app-surface) border bg-(--color-app-bg) rounded-2xl p-5 flex flex-col">
      <h3 className="text-2xl font-bold  mb-1.5 text-(--color-app-navy) ">
        Your Stack
      </h3>
      <p className="text-sm text-(--color-app-navy) leading-relaxed mb-4 flex-1"></p>
      <StackItem stack={stack} setStack={setStack}></StackItem>

      <button className="w-full mt-3 py-2.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium">
        Remove All
      </button>
    </div>
  );
};

export default SideBar;
