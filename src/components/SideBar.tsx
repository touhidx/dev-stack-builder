import type { Dispatch, SetStateAction } from "react";
import type { Iprops } from "../type";
import StackItem from "./StackItem";
import { Bounce, toast } from "react-toastify";

// import React from "react";
interface Iprop {
  stack: Iprops[];
  setStack: Dispatch<SetStateAction<Iprops[]>>;
}
const SideBar = ({ stack, setStack }: Iprop) => {
  const removeAll = () => {
    setStack([]);
    toast.error("All removed !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  console.log(stack);
  return (
    <div className=" border-(--color-app-surface) border bg-(--color-app-bg) rounded-2xl p-5 ">
      <h3 className="text-2xl font-bold  mb-1.5 text-(--color-app-navy) ">
        Your Stack
      </h3>

      <p className="text-sm text-(--color-app-navy) leading-relaxed mb-4 ">
        {stack.length !== 0
          ? `${stack.length} Technology Selected`
          : "No Technology Selected"}
      </p>
      {stack.length !== 0 ? (
        <>
          <StackItem stack={stack} setStack={setStack}></StackItem>

          <button
            onClick={() => removeAll()}
            className="w-full mt-3 py-2.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium"
          >
            Remove All
          </button>
        </>
      ) : (
        <>
          <div className="px-8 py-7 border border-dotted rounded-2xl">
            <p className="text-gray-400 text-lg text-center">
              Your stack is empty
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
