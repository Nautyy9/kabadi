import React from 'react'
import img1 from '../assets/india-map-locations.png'
function Section6() {
  return (
    <div className='relative mt-20 lg:mt-10 pb-20 lg:pb-10'>
        <div className="text-sun-dark flex flex-col lg:flex-row  items-center " >
            <div className="d-block mb-10 lg:hidden gap-y-8  md:w-11/12 mx-auto">
                <h1 className='text-3xl xs:text-5xl md:text-6xl px-10 sm:px-20 text-center'>Our <span className='text-green-600'>Presence</span> Across Nation</h1>
            </div>
           
            <div className="flex items-center w-1/3 lg:mx-auto  justify-center">
                <img src={img1} alt="" />
            </div>
            <div className="flex flex-col mt-10 gap-y-8 w-11/12 lg:w-1/3 mx-auto">
                <h1 className='hidden lg:block text-6xl px-20  lg:px-0 lg+:px-5 text-center'>Our <span className='text-green-600'>Presence</span> Across Nation</h1>
                <p className='text-xl w-4/5 lg:w-auto mx-auto'>The Kabadiwala has established its services in 5 major cities of India and is now expanding its reach in other parts of the country.</p>
                <div className="flex gap-3 flex-wrap w-4/5 lg:w-auto mx-auto">
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                    <p className='border bg-sun-dark-btn-hover rounded-lg text-black px-4 py-2'>Bhopal</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6