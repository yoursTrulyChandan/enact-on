import React, { useState } from 'react';
import background from '../assets/slide4_image_1.png';
import logo from "../assets/Chef-Matt-rev-white-high-res-1-2048x1365 1.png";
import cart from "../assets/Bag_alt.png"
import wishlist from "../assets/Favorite.png"

const Banner = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Home")
  const menu = ["Home", "Products", "Meet Chef Matt", "faq", "Connect with us"]

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="h-screen relative bg-cover bg-no-repeat bg-center flex items-center justify-center font-bold z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={`bg-gray-800 text-white w-96 absolute top-0 left-0 py-10 h-screen transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
        <button className="absolute top-10 left-10 text-white" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className='flex flex-col justify-between relative h-[95%]'>
          <div>
            <img src={logo} alt='Logo' />
            <div className="p-10">
              <ul className="mt-4 flex flex-col items-start gap-y-6">
                {menu.map((item, index) => (
                  <li key={index} className={`${selectedMenu === item ? "text-yellow-400" : "text-white"} font-normal text-[22px] uppercase cursor-pointer`} onClick={() => setSelectedMenu(menu[index])}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex justify-between px-10 py-6 border-b-2 border-white'>
            <p>TEXT SUPPORT 24/7</p>
            <p className='text-yellow-400 underline'>070-7782-9137</p>
          </div>
        </div>
        <div className='uppercase h-auto flex items-center justify-between px-10 py-4'>
          <div className='flex items-center justify-center gap-3'>
            <img src={cart} alt='Cart' />
            <p>Cart</p>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <img src={wishlist} alt='Wishlist' />
            <p>Wishlist</p>
          </div>
        </div>
      </div>
      <div className="bg-none border-white border-[3px] bg-opacity-75 p-6 mt-32 text-3xl text-white">
        Meet Chef Matts
      </div> ̰
    </div>
  );
}

export default Banner;
