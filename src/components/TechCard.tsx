// import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import type { Iprops } from "../type";
import { use, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
interface Iprop {
  techPromise: Promise<Iprops[]>;
  stack: Iprops[];
  setStack: Dispatch<SetStateAction<Iprops[]>>;
}

const TechCard = ({ techPromise, stack, setStack }: Iprop) => {
  const technologies = use(techPromise);
  // const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSelectStack = (tech: Iprops): void => {
    // setIsClicked(true);
    const isAlReadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlReadyAdded) {
      setStack(stack.filter((item) => item.id !== tech.id));
    } else {
      toast.success("Your Stack is Added", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setStack([...stack, tech]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {technologies.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);
        return (
          <div
            key={tech.id}
            className={
              isAdded
                ? "bg-(--color-app-bg) col-span-1 border border-(--color-brand-dark) rounded-2xl p-5 flex flex-col shadow-xl"
                : "bg-(--color-app-bg) col-span-1 border border-(--color-brand)/15 rounded-2xl p-5 flex flex-col shadow-sm"
            }
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-(--color-bg-light) border border-(--color-brand)/10">
                <img
                  className="w-6 h-6 object-contain"
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-(--color-brand)/10 text-(--color-brand-dark)">
                {tech.badge}
              </span>
            </div>

            <h3 className="text-base font-bold mb-1.5 text-(--color-brand-dark)">
              {tech.name}
            </h3>
            <p className="text-sm text-(--color-brand-dark)/75 leading-relaxed mb-4 flex-1">
              {tech.description}
            </p>

            <div className="flex items-center gap-2.5 text-xs text-(--color-brand-dark)/70 mb-4">
              <span className="bg-(--color-bg-light) text-(--color-brand-dark) px-2.5 py-1 rounded-md font-medium border border-(--color-brand)/10">
                {tech.category}
              </span>
              <span>{tech.difficulty}</span>
              <span className="flex items-center gap-1 ml-auto font-medium text-(--color-brand-dark)">
                <IoIosStarOutline className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{tech.rating}</span>
              </span>
            </div>

            <button
              disabled={isAdded}
              onClick={() => handleSelectStack(tech)}
              className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isAdded
                  ? "bg-(--color-bg-light) text-(--color-brand-dark) cursor-not-allowed border border-(--color-brand)"
                  : "bg-(--color-brand-dark) text-(--color-bg-light) hover:bg-(--color-brand)"
              }`}
            >
              {isAdded ? "Added" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechCard;
