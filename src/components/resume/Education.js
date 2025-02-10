import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-10"
      >
        {/* part one */}
        
        <div className="flex-1">          
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Master Of Science (Computer Science)"
              subTitle="Mangalore University, Mangalore"
              result="JUN 2019 - DEC 2021"
              des="Gained advanced knowledge of AI, deep learning, and image processing with Python through rigorous study and hands-on experience. Experimented on Databases and SQL."
            />
            <ResumeCard
              title="Bachelor of Science (Mathematics & Computer Science)"
              subTitle="Vivekananda Degree College, Puttur"
              result="2016-2019"
              des="Strengthened core computing skills by mastering problem solving, data structures (DSA), and operating systems. "
            />
            <ResumeCard
              title={
                <a href="https://www.sololearn.com/profile/5408906/" target="_blank" rel="noopener noreferrer" >
                  SoloLearn (View profile)
                </a>}
              subTitle="SoloLearn, Inc."
              result="2017 - Present"
              des="Proudly Learnt Coding & Web Development ( HTML, CSS, Javascript) ||
              Contributed several Optimal and Fun Code bits ||
              Guided Sololearn Community"
            />
          </div>
        </div>
        {/* part Two */}

        <div className="flex-1">
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title={
                <a href="https://olympus1.mygreatlearning.com/course_certificate/NSNLZOAV" target="_blank" rel="noopener noreferrer" >
                  Python For Machine Learning
                </a>}
              subTitle="Provided by Great Learning Academy"
              result="Online"
              des="Learnt Machine Learning Insights and Tools like Pandas, Numpy and Scikit-Learn!"
            />
            <ResumeCard
              title={
                <a href="https://google.accredible.com/bf4c7ed8-5ec8-4491-837e-6b2823fc58ca" target="_blank" rel="noopener noreferrer" >
                  Google Cloud Certified Associate Cloud Engineer
                </a>}
              subTitle="Google Cloud [2-3 months]"
              result="Online"
              des="In the course, I gained proficiency in deploying applications, overseeing operations, and responsibilities of an Associate Cloud Engineer.
              I acquired hands-on experience utilizing both the Google Cloud Console and command-line interface to execute routine tasks on the platform."
            />
            <ResumeCard
              title={
                <a href="https://www.sololearn.com/Certificate/1073-5408906/jpg/" target="_blank" rel="noopener noreferrer" >
                  Python Core
                </a>}
              subTitle="SoloLearn"
              result="Online"
              des=" Learnt Basic to Advanced Concepts of Python"
            />
          </div>
        </div>
      </motion.div >
    </div>
  );
}

export default Education