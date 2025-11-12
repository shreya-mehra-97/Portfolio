import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
 } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
   SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
 


const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
   // { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    // { name: "NextJS", icon: <SiNextdotjs className="text-gray-400" /> },
    // { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    
   ]

  return (
    <div className="bg-black lg:mx-[10rem]   py-12">
      <h2 className="text-3xl xs:text-[30px] font-bold text-white text-center xs:mx-[2rem] mb-12">
        Technologies I Work With
      </h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8 mx-[5rem] xs:mx-[1rem]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-black p-6 rounded-full shadow-md text-center hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="text-6xl flex justify-center items-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-lg font-medium text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
