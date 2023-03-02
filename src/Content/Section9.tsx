import React, {useContext} from 'react'
import { Props } from '../../@types/main'
import {AuthContext} from '../context/AuthContext'
import img1 from '../assets/partners-reliance.png'
function Section9() {
  const {theme, setTheme} = useContext(AuthContext) as Props

  return (
    <div className='relative text-sun-dark flex  flex-col lg:flex-row gap-y-10  items-center lg:items-start lg:gap-y-0 mt-10 pb-40'>
        <div className="flex order-2  lg:order-none items-end md:mr-20 gap-y-10 flex-col md:w-1/2">
            <div className=' grid  grid-flow-col gap-x-6 md:gap-x-16  grid-cols-3'>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-xl ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
            </div>
            <div className='grid grid-flow-col gap-x-6 md:gap-x-16 grid-cols-3'>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
            </div>
            <div className='grid grid-flow-col gap-x-6 md:gap-x-16 grid-cols-3'>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
                <div className={`w-20 h-20 xxs:w-24 xxs:h-24 sm:w-32 sm:h-32 rounded-xl flex items-center justify-center  ${theme? 'bg-gray-light': 'bg-white'}`}>
                    <img src={img1} className='w-2/3 sm:w-auto' alt="" />
                </div>
            </div>
        </div>
        <span className=' border hidden lg:block h-96 my-auto lg:mx-0'/>
        <div className=" order-1 lg:order-none flex flex-col gap-y-10 items-center lg:my-auto justify-center ">
            <span className='border-x lg:hidden block my-auto'/>
            <h1 className='text-5xl lg:text-6xl font-md lg:font-bold pl-2 lg:pl-0 xs:w-3/4 lg:w-2/3 mx-auto'>Trusted by 500+ global partners</h1>
            <p className='text-md lg:text-xl xs:w-3/4 pl-2 lg:w-2/3 lg:pl-0  mx-auto '>The Kabadiwala is an official waste management partner with the world’s greatest organization</p>
        </div>
    </div>
  )
}

export default Section9