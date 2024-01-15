import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check out my Projects on Github or Live Preview"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food-Price-Clash"
          des="This Web App Compares Price Between Swiggy and Zomato by Real Time (live) data streaming with Web Scraping 🕸 and Data Analysis📉.  User will get direct Suggestion as - 'Which Food Delivery site is cheaper❓' from Price-Analysis. "
          src={projectOne}
          githubLink="https://github.com/SanjayKH-Git/Food-Price-Clash"
          websiteLink="https://user-images.githubusercontent.com/56336350/257919089-7005d802-9be7-4880-9d37-39c8cf3ab6df.mp4"

        />
        <ProjectsCard
          title="Real Time Pedestrian Detection Using 🤖 Deep-Learning (AI) & Computer-Vision"
          des=" Research 👨🏻‍🔬 Project on Pedestrian Detection Problem using AI and Deep Learning for Improving the Performance of Detector on Lower end Machines; Trained SSD-MobileNet_V2 - Model with TensorFlow⚡ and Deployed in Python-Kivy based Cross Platform Application (GUI) which runs on Windows, macOS, Android, iOS, Linux, and even on Raspberry-Pi."
          src={projectTwo}
          githubLink="https://github.com/SanjayKH-Git/Real-Time-Pedestrian-Detection-Using-Deep-Learning-And-Computer-Vision"
          websiteLink="https://www.linkedin.com/feed/update/urn:li:activity:6895273880026542080/"
        />
        <ProjectsCard
          title="NYC-2022-Akanksha"
          des="Developed React JS with Tailwind CSS based Website for NATIONAL YOUTH CONFERENCE 2022 Event as per the Requirements and Specifications from an NGO - Akanksha Charitable Trust (ACT), Puttur."
          src={projectThree}
          githubLink="https://github.com/SanjayKH-Git/NYC-2022-Akanksha"
          websiteLink="https://main--nyc-2022.netlify.app/"
        />
        <ProjectsCard
          title="CFP-Remote"
          des="Innovated a Remote tool with Python (Django- Web App) that will perform SMS and Call Bombing on Fraudsters phone Number, Email Bombing on target mail. This would help in preventing the cyber frauds by blocking their assets used for making frauds!"
          src={projectFour}
          githubLink="https://github.com/SanjayKH-Git/CFPRemote"
          websiteLink="https://docs.google.com/document/d/12xwJnyFQrmpIUWvp7BGvKgpsRPLkNcW3Y7o6mT8SWvU/edit"
        />
        <ProjectsCard
          title="Automatic-Website-Verifier-Django"
          des="Built Automation Tool which can verify Bulk collection of Website Links stored in Sheets instantly with Web Scraping + Excel Automation technique and Automatically updates results in Excel File"
          src={projectFive}
          githubLink="https://github.com/SanjayKH-Git/Automatic-Website-Verifier-Django"
          websiteLink="https://user-images.githubusercontent.com/56336350/257923705-fb926395-ef62-493e-a64c-ea2c055fd2bf.mp4"
        />
        <ProjectsCard
          title="PlanIT4Future"
          des="Founder || Content Creator || Tech Developer
          🔰Created Unique Social Media Contents🌁     
          🔰Crafted this Education Platform (NodeJS)"
          src={projectSix}
          githubLink="https://www.youtube.com/@plant1710"
          websiteLink="https://planit4future.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects