import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center rounded-lg relative">
      <img
        className="w-[400px] h-[350px] lgl:w-[400px] lgl:h-[370px] z-10 rounded-xl rounded-b-xl"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[390px] lgl:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-xl"></div>
    </div>
  );
}

export default RightBanner