import React from 'react'
import {  FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Sanjaykrishna Hegade</h3>
        {/* <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p> */}
        <p className="text-base text-gray-400 tracking-wide">
        You can Contact Me any time asynchronously. Reach out Me @ <a href="https://www.linkedin.com/in/sanjay-krishna-hegade-19216915b/" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-400'>Linked in chat</a> for Quik Response.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9019333126</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sanjayhegde92@gmail.com</span>
        </p>
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Linked-in: <span className="text-lightText">https://www.linkedin.com/in/sanjay-krishna-hegade-19216915b/</span>
        </p> */}
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base font-bold font-titleFont mb-4">OR Directly click</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="tel:+919019333126" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt /><span className='text-sm'>Phone</span></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:sanjayhegde92@gmail.com">
            <SiGmail /><span className='text-sm'>Mail</span></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/sanjay-krishna-hegade-19216915b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /><span className='text-sm'>Chat</span></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft