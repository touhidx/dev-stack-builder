import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col">
      <h3 className="text-2xl font-bold  mb-1.5 text-(--color-app-navy) ">
        Your Stack
      </h3>
      <p className="text-sm text-(--color-app-navy) leading-relaxed mb-4 flex-1"></p>
      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
        <span className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md font-medium"></span>
        <span></span>
        <span className="flex items-center gap-1 ml-auto">
          <span className="text-neutral-700 font-medium"></span>
        </span>
      </div>
      <button className="w-full py-2.5 rounded-lg bg-(--color-app-navy) text-(--color-app-bg) hover:bg-(--color-app-primary) text-sm font-medium   ">
        Add to Stack
      </button>
    </div>
  );
};

export default SideBar;
