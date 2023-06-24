import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-bgColor text-gray-300">
      {/* <div id="about" className="w-full h-screen bg-bgColor text-gray-300"> */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-customHighlight">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full x-4 grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm a detail-oriented kind of chap.</p>
          </div>
          <div>
            <p>
              I pride myself on crafting clean, elegant code. I'm committed
              utilizing best practices. I am particuarly interested in software
              which improves the lives of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
