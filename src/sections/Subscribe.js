import React from 'react'
import subscribe from "../assets/image_banner_11.png"
import meet from "../assets/image6.png"
import recipes from "../assets/Rectangle13.png"
import live from "../assets/Rectangle14.png"

const Subscribe = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <div className='relative w-[641px]'>
                    <div className='bg-white relative h-full w-[72%] z-10 flex flex-col items-start justify-center gap-4 p-8'>
                        <p className='text-4xl text-black'>SUBSCRIBE & SAVE</p>
                        <p className='text-[16px] text-black text-left'>Join Chef Matt’s Monthly Subscription
                            and bring world class chef quality
                            meals to your home.</p>
                    </div>
                    <img src={subscribe} alt='Subscribe' className=' absolute right-0 top-0 z-1' />
                </div>
                <img src={meet} alt='Meet the chef' />
            </div>
            <div className='flex'>
                <img src={recipes} alt='Recipes' />
                <img src={live} alt='Live' />
            </div>
        </div>
    )
}

export default Subscribe