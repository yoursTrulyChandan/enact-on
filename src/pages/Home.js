import React from 'react'
import Banner from '../sections/Banner'
import Products from '../sections/Products'
import Offer from "../sections/Offer"
import Footer from '../sections/Footer'
import Signup from '../sections/Signup'
import Subscribe from '../sections/Subscribe'

const Home = () => {
  return (
    <div className=''>
      <Banner />

      <div className='flex flex-col items-end justify-center'>
        <Products />
        <Offer />
        <Subscribe />
        <Signup />
        <Footer />
      </div>
    </div>
  )
}

export default Home