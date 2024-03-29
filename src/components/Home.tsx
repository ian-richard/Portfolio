import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-bgColor">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text 4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ian Richard
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Typescript and React specialist.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
