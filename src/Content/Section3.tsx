import React , {useContext}from 'react'
import man1 from '../assets/individual.webp'
import man2 from '../assets/business-man.webp'
import { Props
 } from '../../@types/main'
 import { AuthContext } from '../context/AuthContext'
 import {AiOutlineArrowRight} from 'react-icons/ai'

function Section3() {
  const {theme, setTheme} = useContext(AuthContext) as Props
  return (
    <div className='relative mt-40'>
        <div className="h-max flex-col mt-20 xxs+:mx-10 lg:mt-0 gap-y-20 flex items-center justify-center">
          
            <div className='h-1/2 lg:h-72 w-full lg:w-2/3 lg+:w-1/2  rounded-2xl flex lg:flex-row flex-col bg-sun-card-primary'>
              <div className="flex justify-center rounded-t-xl  h-60 lg:h-full lg:w-2/3 items-center  rounded-lt-2xl lg:rounded-l-2xl bg-sun-card-secondary">
              <img src={man1} className="w-60 mb-9 lg:mb-11 lg:w-64 lg:mt-9" alt=""  />
              </div>
              <div className=" flex  lg:block flex-col text-sun-dark my-2 lg:my-auto px-6 justify-center items-center w-full rounded-r-2xl">
                <p className='font-semibold py-1 sm:py-2 text-sm text-gray-text'>Empowering</p>
                <h1 className='font-semibold xxs:pb-2 xs:pb-4 text-green-700 text-4xl sm:text-5xl'>Individuals</h1>
                <p className='font-medium xxs:pb-1 sm:pb-2 text-sm sm:text-md'>by providing safe disposal ways to ensure healthy environment & sustainable living.</p>
                <button className='flex  font-bold items-center hover:bg-sun-dark-btn hover:text-white rounded-2xl transition  duration-75 hover:px-3 py-1'>Learn More <AiOutlineArrowRight className='m-1 p-1 w-6 h-6'></AiOutlineArrowRight></button>
              </div>
            </div>
            <div className='h-1/2 max-h-max lg:h-72 w-full  lg:w-2/3 lg+:w-1/2  rounded-2xl flex lg:flex-row flex-col bg-sun-card-primary'>
              <div className=" flex relative overflow-hidden lg:block flex-col text-sun-dark my-2 lg:my-auto px-6 justify-center items-center w-full rounded-r-2xl">
                <p className='font-semibold py-1 sm:py-2 text-sm text-gray-text'>Empowering</p>
                <h1 className='font-semibold xxs:pb-2 sm:pb-4 text-green-700 text-4xl sm:text-5xl'>Individuals</h1>
                <p className='font-medium xxs:pb-1 sm:pb-2 text-sm sm:text-md'>by providing safe disposal ways to ensure healthy environment & sustainable living.</p>
                <button className='flex font-bold items-center hover:bg-sun-dark-btn hover:text-white rounded-2xl transition  duration-75 hover:px-3 py-1'>Learn More <AiOutlineArrowRight className='m-1 p-1 w-6 h-6'></AiOutlineArrowRight></button>
              </div>
              <div className="order-first rounded-t-xl lg:order-last flex justify-center h-60 lg:h-full lg:w-2/3 items-center  rounded-rt-2xl lg:rounded-r-2xl bg-sun-card-secondary">
              <img src={man2} className="w-60 mb-12 pb-1 lg:pb-0 lg:mb-6 lg:w-64" alt=""  />
              </div>
            </div>
          
        </div>
        
    </div>
  )
}

export default Section3