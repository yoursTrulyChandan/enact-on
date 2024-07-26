import React from 'react'
import { footerData } from '../data/data'
import logo from "../assets/Chef-Matt-rev-white-high-res-1-2048x1365 1.png"

const Footer = () => {

  return (
    <div className='w-auto'>
      <div className='flex gap-10 p-24 border-b-8 border-yellow-600'>
      {footerData.map((item) => (
        <div className='flex gap-6 items-start justify-center'>
          <img src={item.img} />
          <div className='flex flex-col items-start gap-3'>
            <p className='font-normal text-yellow-600 text-2xl uppercase'>{item.title}</p>
            <p className='font-normal text-white text-[18px]'>{item.content}</p>
          </div>
        </div>
      ))}
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={logo} alt='Logo' />
      </div>
    </div>
  )
}

export default Footer