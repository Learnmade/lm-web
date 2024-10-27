import React from 'react'
import bannerImg from '../../assets/coursebanner.png'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse items-center'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>
      <div className='md:w-1/2 w-full '>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>learn-made academy</h1>
        <p className='mb-10'>
            welcome to learnmade accademy this is a greate place to learn programming, 
            we have a wide range of courses for you to choose from,
            and we are always here to help you grow and improve your skills.
        </p>
        <button className='btn-primary'>Join Membership</button>
      </div>
      
    </div>
  )
}

export default Banner
