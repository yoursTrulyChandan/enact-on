import React, { useState } from 'react';
import background from '../assets/slide4_image_1.png';
import logo from "../assets/Chef-Matt-rev-white-high-res-1-2048x1365 1.png";

const Banner = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Home")
  const menu = ["Home", "Products", "Meet Chef Matt", "faq", "Connect with us"]

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center font-bold"
      style={{backgroundImage: `url(${background})` }}
    >
        <div className={`bg-gray-800 text-white w-64 absolute top-0 left-0 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
        <div className="p-4">
            <img src={logo} alt='Logo' />
          <ul className="mt-4">
            {menu.map((item, index) => (
                <li key={index} className={`${selectedMenu === item ? "text-yellow-400" : "text-white"} font-normal text-[22px] uppercase cursor-pointer`} onClick={() => setSelectedMenu(menu[index])}>{item}</li>
            ))}
          </ul>
        </div>
        <button className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="bg-none border-white border-[3px] bg-opacity-75 p-6 text-3xl text-white">
      Meet Chef Matt
      </div> ̰
    </div>
  );
}

export default Banner;
