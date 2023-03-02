import React, { useContext, useState , useEffect} from 'react'
import { Props } from '../../@types/main'
import {GrLocation} from "react-icons/gr"
import { AuthContext } from '../context/AuthContext'
import Footer from './Footer'
import Header from './Header'
import { SyncLoader } from 'react-spinners'

function Careers() {
  const {theme} = useContext(AuthContext) as Props
  const [loading, setLoading] =useState<boolean>(false);
  useEffect(() => {
    let unmount = false

    if(!unmount){
      setLoading(true);
      setTimeout(() =>{
      setLoading(false)
  },2000)
}
return () => {unmount = true;} 
  },[])

  if(loading) {
    return (
       <div className={`${theme? 'bg-sun-light' : 'bg-sun-dark'} bg-sun-dark flex flex-col gap-y-20 h-screen items-center justify-center`} >
      <SyncLoader
        size={20}
        color="#36d7b7"
      />
      </div>
    )
  }
  return (
    <div className={theme? ' bg-sun-light text-sun-light' : 'text-sun-dark dark-one bg-sun-darkmode'}>
      <div className="relative h-max flex flex-col">
      <Header/>
        <div className="mt-40 h-max w-5/6  mx-auto text-sun-dark">
          <h1 className='text-center  text-5xl font-bold mb-10'>Find Your Future</h1>
          <p className='text-lg '>TheKabadiwala is looking for world-class talent ready to tackle challenging projects that will ultimately make our planet green. We are an equal opportunity employer offering competitive salaries, comprehensive health benefits and equity packages.Content Writer</p>
          <div className={`cursor-pointer hover:text-green-exact transition-colors duration-300 mt-10 rounded-2xl h-40 border-2 border-white px-10  py-5 w-11/12 mx-auto ${ theme? 'bg-gray-light' : 'bg-gray-dark'}`}>
            <h2 className='text-2xl font-semibold mb-5'>React Developer</h2>
            <div className="flex gap-x-5">

            <div className="w-max rounded-full  border-2 border-sun-dark px-3 flex gap-x-1.5 py-1">
              <GrLocation className='text-green-exact m-auto h-5 w-5'/>
              <h2 className='text-lg'>Gurgaon</h2>
            </div>
            <div className="w-max rounded-full  border-2 border-sun-dark px-5 flex gap-x-1.5 py-1">
              <h2 className='text-lg'>Graduate</h2>
            </div>
            <div className="w-max rounded-full  border-2 border-sun-dark px-5 flex gap-x-1.5 py-1">
              <h2 className='text-lg'>Full-time</h2>
            </div>
            </div>
            
          </div>
          <div className={`cursor-pointer mt-10 rounded-2xl h-40 border-2 hover:text-green-exact transition-colors duration-300 border-white px-10  py-5 w-11/12 mx-auto ${ theme? 'bg-gray-light' : 'bg-gray-dark'}`}>
            <h2 className='text-2xl font-semibold mb-5'>React Developer</h2>
            <div className="flex gap-x-5">

            <div className="w-max rounded-full  border-2 border-sun-dark px-3 flex gap-x-1.5 py-1">
              <GrLocation className='text-green-exact m-auto h-5 w-5'/>
              <h2 className='text-lg'>Gurgaon</h2>
            </div>
            <div className="w-max rounded-full  border-2 border-sun-dark px-5 flex gap-x-1.5 py-1">
              <h2 className='text-lg'>Graduate</h2>
            </div>
            <div className="w-max rounded-full  border-2 border-sun-dark px-5 flex gap-x-1.5 py-1">
              <h2 className='text-lg'>Full-time</h2>
            </div>
            </div>
            
          </div>

        </div>
      <Footer/>
      </div>
    </div>

  )
}

export default Careers