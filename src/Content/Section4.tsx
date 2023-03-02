import React, {useContext} from 'react'
import img1 from '../assets/Screenshot 2022-10-17 022105.png'
import img2 from '../assets/ss2.png'
import { Props } from '../../@types/main'
import {AuthContext} from '../context/AuthContext'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Section4() {
    const {theme, setTheme} = useContext(AuthContext) as Props
  return (
    <div className='relative'>
        <div className=" mx-auto lg:w-3/4 grid lg:grid-flow-col lg:grid-cols-2  max-h-max  h-[800px] mt-20 w-full text-sun-dark">
            <div className="flex justify-center  items-center  ">
                <img className='object-contain h-80 w-80' src={!theme? img1 : img2} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
                <p className='font-semibold py-4 text-sm text-gray-text'>Our Eco-System Towards</p>
                <h1 className='font-bold pb-6 text-sun-dark  text-lg sm:text-3xl lg:text-6xl'>Sustainability & Circular Economy</h1>
                <p className='font-semibold pb-2 text xs:text-md text-gray-500/90'>The Kabadiwala with its acute understanding of waste has developed sustainable strategies & techniques to manage waste efficiently & cost-efficaciously contributing in closing the loop of product life cycle & attain circular economy while infusing sustainability into lives.</p>
                <button className='flex font-bold items-center hover:bg-sun-dark-btn hover:text-white rounded-2xl transition ease-in-out duration-300 px-3 py-1'>Learn More <AiOutlineArrowRight className='m-1 p-1 w-6 h-6'></AiOutlineArrowRight></button>  
            </div>
        </div>
    </div>
  )
}

export default Section4