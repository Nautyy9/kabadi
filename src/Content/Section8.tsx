import React, {useContext} from 'react'
import { Props } from '../../@types/main'
import {AuthContext} from '../context/AuthContext'
import img1 from '../assets/circular-economy-services.svg'
function Section8() {
  const {theme, setTheme} = useContext(AuthContext) as Props

  return (
    <div id="carousel-light" className='relative h-screen w-full flex flex-col text-sun-dark mt-20' >
        <div className="flex  flex-col justify-center items-center gap-y-8">
          <h1 className='text-6xl font-semibold'>Our Services</h1>
          <p className='text-xl'>Attaining sustainable solutions with ease</p>
          <div className="flex gap-2 justify-center sm:justify-start flex-wrap sm:gap-x-8 mb-20">
            <button className={`p-2 sm:py-2 sm:px-4 text-md active:bg-green-exact active:text-white text-sun-dark ${theme?  'bg-gray-light ' : 'bg-gray-dark '} rounded-md`}>All Service</button>  
            <button className={`p-2 sm:py-2 sm:px-4 text-md active:bg-green-exact active:text-white text-sun-dark ${theme?  'bg-gray-light ' : 'bg-gray-dark '} rounded-md`}>For Individuals</button>
            <button className={`p-2 sm:py-2 sm:px-4 text-md active:bg-green-exact active:text-white text-sun-dark ${theme?  'bg-gray-light ' : 'bg-gray-dark '} rounded-md`}>For Organisations</button>
          </div>
        </div>
        <div id="carousel-light" className="w-screen mb-6 flex flex-wrap overflow-scroll justify-center items-center  gap-10">
            
            <div className={`h-28 w-72 sm:h-28 sm:w-96  ${theme ? 'bg-gray-light ' : 'bg-gray-dark '}  rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div>
            <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div> <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div> <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div> <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div> <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div>
            <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div>
            <div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div><div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div><div className={`h-28 w-72 sm:h-28 sm:w-96 ${theme ? 'bg-gray-light ' : 'bg-gray-dark '} rounded-xl flex`}>
              <img src={img1} className="w-10 h-10 my-auto mx-4" alt="" />
              <div className=" flex flex-col  justify-center gap-y-1">
                <h2 className='font-semibold  sm:text-md'>EPR Service</h2>
                <p className='w-full text-xs sm:w-11/12 '>The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.</p>
              </div>
            </div>
        </div>
            <button className='mb-10 3xl:mt-10 mx-auto p-2 rounded-xl h-10 w-32 text-white bg-green-exact'>Contact Us</button>
    </div>
  )
}

export default Section8