import React, { useContext } from 'react'
import img1 from '../assets/mattress-circular-economy.webp'
import img2 from '../assets/tetra-pak-initiative.webp'
import img3 from '../assets/tree-plantation-initiative.webp'
import img4 from '../assets/kitab-ghar.webp'

import { Props } from '../../@types/main'
import {AuthContext} from '../context/AuthContext'
import {FaAngleRight} from 'react-icons/fa'
function Section7() {
    const {theme, setTheme} = useContext(AuthContext) as Props

  return (
    <div className='relative text-sun-dark '  style={{height: '700px'}}>
        <div className="mt-10">
            <h1 className='text-center font-semibold text-6xl pb-5'>Our Initiatives</h1>
            <p className='text-xl text-center'>Small steps towards <span className='text-green-600'>sustainability</span>.</p>
        </div>
        <div id={theme? 'carousel-dark' : 'carousel-light'} className=" pt-12 pb-8 overflow-x-scroll grid grid-flow-col  gap-x-10 w-11/12 mx-auto">
            <div className={`flex flex-col  mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '470px'}}>
                <img src={img1} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold mt-2 mb-4 text-2xl '>Mattress Circular Journey</h1>
                    <p className='text-gray-text mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’. The objective is to encourage the community to practise sustainable disposal of Mattress.</p>
                    <button className='mt-6 flex py-1 px-3 rounded-full text-center  text-white bg-sun-dark-btn'>Learn More <FaAngleRight className='h-5 pt-1 w-5'></FaAngleRight></button>
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '470px'}}>
                <img src={img2} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold mt-2 mb-4 text-2xl '>Tetra Pak Initiative</h1>
                    <p className='text-gray-text mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’. The objective is to encourage the community to practise sustainable disposal of Mattress.</p>
                    <button className='mt-6 flex py-1 px-3 rounded-full text-center  text-white bg-sun-dark-btn'>Learn More <FaAngleRight className='h-5 pt-1 w-5'></FaAngleRight></button>
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '470px'}}>
                <img src={img3} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold mt-2 mb-4 text-2xl '>Tree Plantation Initiative</h1>
                    <p className='text-gray-text mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’. The objective is to encourage the community to practise sustainable disposal of Mattress.</p>
                    <button className='mt-6 flex py-1 px-3 rounded-full text-center  text-white bg-sun-dark-btn'>Learn More <FaAngleRight className='h-5 pt-1 w-5'></FaAngleRight></button>
                </div>
            </div>
            <div className={`flex flex-col mx-auto  w-80 ${theme? 'bg-gray-light' :'bg-gray-dark'} rounded-xl`} style={{height: '470px'}}>
                <img src={img4} className='rounded-t-xl' alt="" />
                <div className="w-11/12 mx-auto">
                    <h1 className='font-semibold mt-2 mb-4 text-2xl '>Kitab Ghar</h1>
                    <p className='text-gray-text mb-2'>ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’. The objective is to encourage the community to practise sustainable disposal of Mattress.</p>
                    <button className='mt-6 flex py-1 px-3 rounded-full text-center  text-white bg-sun-dark-btn'>Learn More <FaAngleRight className='h-5 pt-1 w-5'></FaAngleRight></button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Section7