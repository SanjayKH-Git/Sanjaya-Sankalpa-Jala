import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  

  const [text] = useTypewriter({
    words: [
      'Web Scraping Specialist.',
      'Professional Python Developer.',
      'Machine Learning & AI Enthusiast',
      'Lifelong Learner',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-bold ">Namaste 🙏,</h4>
        <h1 className="text-5xl font-bold text-white sm:text-3xl md:text-3xl lg:text-4xl">
          I'm <span className="text-designColor capitalize">Sanjaykrishna Hegade</span>
        </h1>
        <h2 className="text-2xl sm:text-xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base text-justify font-bodyFont leading-6 tracking-wide">
          You are <b className="text-blue-600">@</b> Right place, If You are looking for{' '}
          <b className="text-sky-300">Specialist Software Developer </b>, Specialized in custom{' '}
          <i className="font-bold">Web Scraping🧲 & Full Stack Development 🌐</i>
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
