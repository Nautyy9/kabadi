import React from 'react'
import img1 from '../assets/mobile-screen-india.webp'
import {FaTelegramPlane, FaGooglePlay, FaApple} from 'react-icons/fa'
function Section5() {
  return (
    <div className='relative'>
        <div className="flex flex-col lg:flex-row  lg:h-lg+  gap-10 sm:gap-16 md:gap-y-14 pt-10 sm:pt-20 items-center lg:justify-evenly bg-sun-dark-btn text-white">
            <div className="s md:pt-0 md:mt-0 order-last lg:order-first">
                <img src={img1}  className="mx-auto lg:mx-0 w-lg-sm lg:mt-0 lg:h-full  lg:w-10/12  " alt="" />
            </div>
            <div className="order-first md:gap-y-3 lg:order-last flex flex-col justify-center w-11/12 mx-auto lg:mx-0 lg:w-1/3">
                <h3 className='text-5xl  font-semibold pb-4'>kabadi</h3>
                <h1 className='text-3xl  md:text-5xl lg:text-6xl  sm:px-20 lg:px-0 text-center lg:text-start font-bold pb-4 '>India’s No. 1 Scrap Pickup App</h1>
                <p className=' text-lg md:text-xl text-center lg:text-start'>Providing door-to-door free pickup service of 40+ recyclables.</p>
                <div className="flex gap-x-2 justify-center lg:justify-start mb-2">
                    <button className='border rounded-lg mt-2  border-white p-2 flex'><FaTelegramPlane className='w-6 h-6 pr-2'></FaTelegramPlane> Send me an invite</button>
                    <span className='font-bold border mt-1 mx-2 sh-12 '></span>
                    <span className='my-auto mx-2' ><FaGooglePlay className='h-6 w-6'></FaGooglePlay></span>
                    <span className='my-2' ><FaApple className='h-8 w-8'></FaApple></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5