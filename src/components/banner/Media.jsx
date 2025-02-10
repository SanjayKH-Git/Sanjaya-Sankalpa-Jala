import React from 'react';
import { FaLinkedinIn, FaReact, FaPython } from "react-icons/fa";
import { SiMongodb, SiGithub, SiGmail, SiDjango, SiFastapi } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/SanjayKH-Git/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:sanjayhegde@gmail.com"
            className="bannerIcon"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjay-krishna-hegade-19216915b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Technical STACKS
        </h2>
        <div className="flex gap-4">
          <a
            href="#"
            className="bannerIcon"
            title="Python"
          >
            <FaPython />
          </a>
          <a
            href="#"
            className="bannerIcon"
            title="Django"
          >
            <SiDjango />
          </a>
          <a
            href="#"
            className="bannerIcon"
            title="React"
          >
            <FaReact />
          </a>
          <a
            href="#"
            className="bannerIcon"
            title="MongoDB"
          >
            <SiMongodb />
          </a>
          <a
            href="#"
            className="bannerIcon"
            title="FastAPI"
          >
            <SiFastapi />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
