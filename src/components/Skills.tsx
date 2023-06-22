import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import AWS from "../assets/aws.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import reactIcon from "../assets/react.png";
import TS from "../assets/Typescript.png";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto =-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={reactIcon} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={TS} alt="TS icon" />
            <p className="my-4">TS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 durtion-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
