import React, { useState } from 'react';
import background from '../assets/slide4_image_1.png';
import logo from "../assets/Chef-Matt-rev-white-high-res-1-2048x1365 1.png";
import verticalLogo from "../assets/Chef-Matt-rev-white-high-res-1-2048x1365 1 (1).png"
import cart from "../assets/Bag_alt.png"
import wishlist from "../assets/Favorite.png"
import close from "../assets/Close_round.png"
import hamburger from "../assets/hamburger.png"

const Banner = () => {

  const [isOpen, setIsOpen] = useState(false);
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
      <div className={`bg-black opacity-80 z-1 text-white w-40 absolute top-0 left-0 p-0 h-screen flex items-center justify-center transform ${isOpen ? '-translate-x-full' : 'translate-x-0'} transition-transform ease-in-out duration-100 border-r-8 border-yellow-600`}>
        <button className="absolute top-10 right-auto text-white" onClick={toggleSidebar}>
          <img src={hamburger} alt='Close' />
        </button>
        <img src={verticalLogo} alt='Logo' className='ml-16' />

      </div>
      <div className={`bg-black opacity-80 z-1 text-white w-96 absolute top-0 left-0 py-10 h-screen transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-100`}>
        <button className="absolute top-10 left-10 text-white" onClick={toggleSidebar}>
          <img src={close} alt='Close' />
        </button>
        <div className='flex flex-col justify-between relative h-[95%] z-10 mt-10'>
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
      <div className="bg-none border-white border-[3px] bg-opacity-75 p-6 mt-96 text-3xl text-white">
        Meet Chef Matts
      </div>
    </div>
  );
}

export default Banner;
