import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref); // Trigger animation every time the section is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 0.5 } } : {}}
      className="w-full flex justify-center"
    >
      <div className="w-full lgl:w-4/5">
        <div className="py-12 font-titleFont flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">My Skills </h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {[
            { label: 'Python', width: '90%', delay: 0.5 },
            { label: 'Web Scraping ( Beautifulsoup | Selenium | Playwright | requests | Scrapy | xpath )', width: '95%', delay: 0.6 },
            { label: 'Data Science ( Numpy | Pandas | SciKit Learn | TensorFlow | OpenCV | Openpyxl )', width: '85%', delay: 0.7 },
            { label: 'Web Development ( React JS | HTML | CSS | JavaScript | Bootstrap )', width: '75%', delay: 0.8 },
            { label: 'Database ( NoSQL: MongoDB || SQL: MySQL | PostgreSQL | SQLite )', width: '70%', delay: 0.9 },
            { label: 'Tools ( GitHub | CodeSpace | Visual Studio Code | PyCharm )', width: '80%', delay: 1.0 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.label}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={
                    isInView
                      ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: skill.delay } }
                      : { x: '-100%', opacity: 0 } // Reset animation when out of view
                  }
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: skill.width }}
                >
                  <span className="absolute -top-7 right-0">{skill.width}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
