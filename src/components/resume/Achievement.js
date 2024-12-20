import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <div>
      <div className="py-6 font-titleFont flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor font-bold tracking-[4px]">Click on Title to View Certificate</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
      >
        <div className="flex-1">
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title={
                <a href="https://drive.google.com/file/d/1bJdA3lNxRQGr6LqJfHQGh9KM2guhNQ9U/view" target="_blank" rel="noopener noreferrer" >
                  Won 2nd Prize in Coding
                </a>}
              subTitle="Medhas (IT Fest), Besent Women’s College, Mangalore"
              result="2018"
              des="State Level Inter college IT Fest. Competed with 26 Teams and Successfully Completed C/C++ Coding Challenge"
            />
            <ResumeCard
              title={
                <a href="https://drive.google.com/file/d/167ejqFZ1i3ghmGBUlqD3Gkh814ioawJZ/view" target="_blank" rel="noopener noreferrer" >
                  TCS Gems💎- On the Spot Award
                </a>}
              subTitle="Award for Developing Automation Tool"
              result="2022"
              des="Reduced Human Efforts and Saved significant amount of Time."
            />
            <ResumeCard
              title={
                <a href="https://drive.google.com/file/d/167ejqFZ1i3ghmGBUlqD3Gkh814ioawJZ/view" target="_blank" rel="noopener noreferrer" >
                  TCS Gems💎- Award for Extrordinary Performance
                </a>}
              subTitle="Appreciation for Web-Scraping Performance"
              result="2023"
              des="Scraped Huge Volume of data from more than 200 Websites and Developed Special MultiProcessing Technique which boosted the scraping speed."
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title={
                <a href="https://drive.google.com/file/d/1bD9pH0mIjKqZ8nvgIjh0SXeG04D2ObOi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" >
                  2nd Prize in "Mad-Adds" & Finalist in "Coding"
                </a>}

              subTitle="ST Joseph Engineering College - VAMANJOOR, MANGALURU"
              result="2019"
              des="State Level IT-Fest, Won 2nd Prize in Group Event, Successfully tackled and cleared four challenging coding levels out of a pool of 25 participants."
            />
            <ResumeCard
              title={
                <a href="https://drive.google.com/file/d/1bYmVILICieuHLEz7fLflOR63xv4mVUva/view" target="_blank" rel="noopener noreferrer" >
                  Won 1st Prize in Ice-Breaker 🏆 (Overall Champion)
                </a>}
              subTitle="Viveka-Shodhana (Science Fest),
              Vivekananda Degree College, Puttur"
              result="2019"
              des="District Level Inter College Science-Fest, Won 1st Prize in Ice-Breaker, Our Team Won Overall Championship."
            />
            <ResumeCard
              title="MIT-Hackathon Final Round"
              subTitle=" “TECHNO-MILANGE” National Level
              IT-Fest, Manipal Institute of Technology
              (MIT), Manipal"
              result="2019"
              des="National Level Inter College Fest, Team of 2 Competed with 21 National Level Colleges, Rapidly Developed a fully functional full-stack web application within a single overnight session, Finished with 3rd Place."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievement;
