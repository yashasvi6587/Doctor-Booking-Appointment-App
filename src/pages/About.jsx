import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img src={assets.about_image} className="w-full md:max-w-[360px]" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit magnam vitae id iusto accusantium ducimus obcaecati sed adipisci aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit magnam vitae id iusto accusantium ducimus obcaecati sed adipisci aspernatur?</p>
          <b className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit magnam vitae id iusto accusantium ducimus obcaecati sed adipisci aspernatur?</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit magnam vitae id iusto accusantium ducimus obcaecati sed adipisci aspernatur?</p>

        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold' >CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit placeat sunt at enim odit ratione minus? Sapiente cumque unde architecto.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Lorem, ipsum.</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis architecto magnam neque rem molestiae quibusdam eveniet commodi non velit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nesciunt perferendis molestias atque quod laborum, neque inventore molestiae quasi quo!</p>
        </div>
      </div>
    </div>
  )
}

export default About
