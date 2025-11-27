 import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        {/* Flex container for image and content */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Image section */}
          <div className="relative w-full md:w-1/2 h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gray-500 rounded-xl font-bold w-[5rem] h-8 flex justify-center items-center cursor-pointer"
              >
                DEMO
              </div>
            </div>
          </div>

          {/* Description section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    // {/* </motion.div> */}
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
        <p className="px-[10rem] md:px-[4rem] sm:px-[2rem] mt-5">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.
        </p>
      </motion.div>

      {/* Single-column layout for all screen sizes */}
      <div className="mt-20 flex flex-col gap-10 px-4 sm:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
