import React, { useContext } from 'react'
import img2 from '../assets/media-coverage-forbes-logo.png'
import img3 from '../assets/media-coverage-world-economic-forum-logo.png'
import img4 from '../assets/media-coverage-whatsapp-business-logo.png'
import img5 from '../assets/media-coverage-yahoo-logo.png'
import img1 from '../assets/media-coverage-world-economic-forum-cover.webp'
import { Props } from '../../@types/main'
import {AuthContext} from '../context/AuthContext'
import {FaAngleRight} from 'react-icons/fa'
function Section11() {
    const {theme, setTheme} = useContext(AuthContext) as Props

  return (
    <div className='relative text-sun-dark mt-32  lg:h-lg+'>
        <div className="mt-10">
            <h1 className='mx-auto w-3/4  font-semibold text-6xl pb-5'>They love talking about us</h1>
            <p className='text-xl w-3/4 mx-auto'>Know The Kabadiwala from another side of the table.</p>
        </div>
        <div id={theme? 'carousel-dark' : 'carousel-light'} className=" pt-12 pb-8 overflow-x-scroll grid grid-flow-col  gap-x-10 w-11/12 mx-auto">
            <div className={`flex flex-col  mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '400px'}}>
                <img src={img1} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold my-4 text-gray-text text-center '>Mattress Circular Journey</h1>
                    <p className='text-sun-dark mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’.</p>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '400px'}}>
                <img src={img1} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold my-4 text-gray-text text-center '>Mattress Circular Journey</h1>
                    <p className='text-sun-dark mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’.</p>
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '400px'}}>
                <img src={img1} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold my-4 text-gray-text text-center '>Mattress Circular Journey</h1>
                    <p className='text-sun-dark mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’.</p>
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '400px'}}>
                <img src={img1} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold my-4 text-gray-text text-center '>Mattress Circular Journey</h1>
                    <p className='text-sun-dark mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’.</p>
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Section11