import React from 'react'
import { FaLinkedinIn, FaReact, FaPython } from "react-icons/fa";
import { SiMongodb, SiGithub, SiGmail, SiDjango, SiFastapi} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/SanjayKH-Git/" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:sanjayhegde@gmail.com">
              <SiGmail /></a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sanjay-krishna-hegade-19216915b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase  font-titleFont mb-4">
          Technical STACKS
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <SiDjango />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiFastapi/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media