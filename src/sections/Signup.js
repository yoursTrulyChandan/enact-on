import React from 'react'
import background from "../assets/Rectangle16.png"

const Signup = () => {
  return (
    <div
      className="h-auto relative bg-contain bg-no-repeat bg-center flex items-center justify-start w-full max-w-[1282px] px-20 py-28"
      style={{ backgroundImage: `url(${background})` }}>
      <div className='flex flex-col relative gap-8 items-start justify-start'>
        <div className='border-b-2 py-2 pr-4 border-white'>
          <p className='font-normal text-4xl'>SIGN UP SPECIAL PROMOTIONS</p>
        </div>
        <p className='font-normal text-[18px]'>Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
        <div className='flex gap-4'>
          <input placeholder='Enter email address' className='bg-transparent w-96 border-white border-[1px] px-2 py-1' />
          <button className='bg-yellow-600 text-white min-w-36 px-2 py-[6px]'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Signup