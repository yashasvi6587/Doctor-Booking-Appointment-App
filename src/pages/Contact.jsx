import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 text-sm mb-28    '>
        <img src={assets.contact_image} className="w-full md:max-w-[360px]" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-gray-600' >OUR OFFICE</p>
          <p className='text-gray-500'> 79 - B , Rohit Nagar , <br /> Model Town , Delhi, India</p>
          <p className='text-gray-500'>Email : yshospital234@gmail.com <br /> Ph. No. : +91-876-8236-1234   </p>
          <p className='font-semibold text-lg text-gray-600'>Carrers At YS-HOSPITAL</p>
          <p className='text-gray-500'>Learn about our teams & job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
