import React , {useContext} from 'react'
import { Props } from '../../@types/main'
import img1 from '../assets/farak-padta-hai-children.png'
import {AuthContext} from '../context/AuthContext'
import img2 from '../assets/impact-water.png'
import img3 from '../assets/impact-electricity.png'
import img4 from '../assets/impact-fuel.png'
import img5 from '../assets/impact-trees.png'

function Section10() {
    const {theme} = useContext(AuthContext) as Props
  return (
    <div className="flex flex-col relative   gap-y-10 pb-10">

    <div className='relative '>
        <div className="bg-img1 flex  items-end justify-center h-96 sm+:h-lg+ " >
            <img src={img1} className="" alt=""  />
            <h1 className='absolute top-0 font-semibold text-white text-5xl  sm+:text-7xl pt-10'>Farak Padta Hai !</h1>
            <div className="absolute bottom-3 xxs:bottom-6 xs:bottom-8 sm:bottom-14 sm+:top-3/4  md:top-2/3 " >
            <h1 className='text-center text-2xl font-medium xs:font-semibold text-green-exact sm+:font-bold xs:text-4xl sm+:text-6xl md:text-8xl pb-2'>81,10,504</h1>
            <p className='text-center text-sm xs:text-md text-red-500 font-semibold sm:text-lg'>kilograms waste diverted from land fills.</p>
            </div>
        </div>
    </div>
        <div className="text-sun-dark flex flex-col lg:flex-row items-center xl:flex-row gap-8 justify-center">
            <div className={`h-28  xl:h-24 w-5/6 lg:w-64  xl:w-80 rounded-xl ${theme?  'bg-blue-light': 'bg-blue-dark'}  `}>
                <div className="h-full flex  gap-x-6 lg:gap-x-4 " >
                    <img src={img2} className=" w-14 h-14 ml-6 lg:ml-2 xl:ml-10  my-auto   " alt="" />
                        <div className="flex flex-col items-center  justify-center gap-y-1">
                            <h1 className='text-xl xl:text-3xl font-semibold'>13.8 crores</h1>
                            <p className=' text-md xl:text-xl font-semibold'>Litres of Water</p>
                        </div>
                </div>
            </div>
            <div className={`h-28 xl:h-24 w-5/6 lg:w-64  xl:w-80 rounded-xl ${theme?  'bg-red-light': 'bg-red-dark'}  `}>
                <div className="h-full flex    gap-x-6 lg:gap-x-4 " >
                    <img src={img3} className=" w-14 h-14 ml-6 lg:ml-2 xl:ml-10  my-auto   " alt="" />
                        <div className="flex flex-col items-center  justify-center gap-y-1">
                            <h1 className='text-xl xl:text-3xl font-semibold'>13.8 crores</h1>
                            <p className=' text-md xl:text-xl font-semibold'>Litres of Water</p>
                        </div>
                </div>
            </div><div className={`h-28 xl:h-24 w-5/6 lg:w-64  xl:w-80 rounded-xl ${theme?  'bg-yellow-light': 'bg-yellow-dark'}  `}>
                <div className="h-full flex gap-x-6 lg:gap-x-4 " >
                    <img src={img4} className=" w-14 h-14 ml-6 lg:ml-2 xl:ml-10  my-auto   " alt="" />
                        <div className="flex flex-col items-center  justify-center gap-y-1">
                            <h1 className='text-xl xl:text-3xl font-semibold'>13.8 crores</h1>
                            <p className=' text-md xl:text-xl font-semibold'>Litres of Water</p>
                        </div>
                </div>
            </div><div className={`h-28 xl:h-24 w-5/6 lg:w-64  xl:w-80 rounded-xl ${theme?  'bg-green-light': 'bg-green-dark'}  `}>
                <div className="h-full flex    gap-x-6 lg:gap-x-4 " >
                    <img src={img5} className=" w-14 h-14 ml-6 lg:ml-2 xl:ml-10  my-auto   " alt="" />
                        <div className="flex flex-col items-center  justify-center gap-y-1">
                            <h1 className='text-xl xl:text-3xl font-semibold'>13.8 crores</h1>
                            <p className=' text-md xl:text-xl font-semibold'>Litres of Water</p>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section10