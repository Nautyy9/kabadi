import React,{useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import {data} from '../utils/serviceData';
import {Props} from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';


function Services() {

  const [loading, setLoading] =useState<boolean>(false);
  const params = useParams();
  const param = params.id;
  
  useEffect(() => {
    let unmount = false

    if(!unmount){
      setLoading(true);
      setTimeout(() =>{
      setLoading(false)
  },2000)
    }
    return () => {unmount = true;} 
  }, [param])


const {theme} = useContext(AuthContext) as Props

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
  else {
  return (
    <div className={theme? ' bg-sun-light text-sun-light' : 'text-sun-dark dark-one bg-sun-darkmode'}>
        <Header/>
        <div >
            {data?.map((val , id) => {
              if(param === val.check)
                return (
                  <div className=' relative flex flex-col ' key={val.id}>
                    <div className="relative">

                      <img src={val.img} alt="Erp-Head" className='h-80 w-screen'/>
                      <h1 className={ `text-4xl  xl:text-5xl xxl:text-6xl absolute w-4/5 left-10 md:left-20 md:ml-4  lg:w-1/2 lg:left-20 lg+:left-36  xxl:left-44 3xl:left-56     bottom-4 font-bold text-white`}>{val.heading}</h1>
                    </div>
                    
                    <div className="flex lg:w-11/12  ">
                      <div className="flex flex-col gap-y-20 w-4/5 lg:w-1/2  mx-auto mt-20 ">
                        <div className={`text-lg ${theme ? 'text-black' : 'text-white'}`}>
                          <p>{val.text1}</p>
                        </div>
                        <div className={`text-lg ${theme ? 'text-black' : 'text-white'}`}>
                          <h3 className={`text-4xl  ${theme ? 'text-black' : 'text-white'}`}>{val['text2-head']}</h3>
                          {val.text2.map((inval, ind) => {
                            return (
                              <div key={ind} className='mt-10'>
                                <div className="flex space-x-6 ">
                                  <img className={`text-green-exact h-16 w-16  rounded-full ${theme?  'bg-gray-light' : 'bg-gray-dark'}`}  src={inval?.img} alt="" />
                                  <p className={`mb-10`}><span className='text-2xl flex items-center'>{inval?.head}: </span> {inval?.text}</p>   
                                </div>
                              </div>
                            )
                            })} 
                        </div>
                        {(param === 'epr' || param === 'shredding-service'  || param === 'vehicle-scrapping') && 
                          <div className={`text-lg flex flex-col  ${theme ? 'text-black' : 'text-white'}`}>
                          <h3 className={`text-4xl col-s mb-10 ${theme ? 'text-black' : 'text-white'}`}>{val['text3-head']}</h3>
                          <div className="flex flex-wrap">
                            { val?.text3?.map((inval, ind) => {
                              return (
                                <div className='relative flex gap-x-10 mr-10   ' key={ind}>
                                  <img className='  mt-10 h-60 flex  rounded-xl ' src={inval?.img} alt="img" />
                                  <p className={` overflow-hidden  absolute w-full bottom-0 h-10 flex  rounded-b-xl items-center justify-center ${theme? 'bg-gray-text' : 'bg-gray-dark'} `} >{inval?.head}</p>
                                </div>
                              )
                            })}
                            </div>
                          
                        </div>
            }
                        <div className={`text-lg ${theme ? 'text-black' : 'text-white'}`}>
                        <h3 className={`text-4xl  ${theme ? 'text-black' : 'text-white'}`}>{val['text4-head']}</h3>
                          {val.text4.map((inval, ind) => {
                            return (
                              <div key={ind} className='mt-10'>
                                <div className="flex space-x-6 ">
                                  <img className={`text-green-exact h-16 w-16  rounded-full ${theme?  'bg-gray-light' : 'bg-gray-dark'}`}  src={inval?.img} alt="" />
                                  <p className={`mb-10`}><span className='text-2xl flex items-center'>{inval?.head}: </span> {inval?.text}</p>   
                                </div>
                              </div>
                            )
                            })} 
                        </div>
                        <div className={`text-lg  w-screen flex-wrap ${theme ? 'text-black' : 'text-white'}`}>
                          <h3 className={`w-5/6 text-4xl  ${theme ? 'text-black' : 'text-white'}`}>{val['text5-head']}</h3>
                          <div className="w-5/6 flex flex-wrap mt-10 ">

                          {val.text5.map((inval, ind) => {
                            return (
                              <div key={ind} className='flex flex-wrap mb-10 md:mr-10  '>
                                <div className={` md:w-60 md:h-[350px] min-h-max  rounded-xl ${ theme? 'bg-gray-light' : 'bg-gray-dark'}`}>
                                  <h3 className='text-2xl ml-6 mt-6 font-sans' >{inval?.head}</h3>
                                  <p className='text-lg ml-6 my-4 w-5/6 font-sans'>{inval?.text}</p>
                                </div>
                              </div>
                              )
                            })} 
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block mt-20">
                        <div className={`flex w-96 flex-col gap-y-4  ${theme ?'bg-gray-light' : 'bg-gray-dark'} rounded-xl p-10`}>
                            <h2 className={`text-3xl pb-2 ${theme? 'text-dark': 'text-white'}`}>Other Services</h2>
                          <span className= {`border mb-2 ${theme?  'border-black' : 'border-white'}`}/>
                          <button className={`text-start text-xl ${theme? 'text-dark': 'text-white'} hover:text-green-exact`}>EPR Services</button>
                          <button className={`text-start text-xl ${theme? 'text-dark': 'text-white'} hover:text-green-exact`}>CSR Services </button>
                          <button className={`text-start text-xl ${theme? 'text-dark': 'text-white'} hover:text-green-exact`}>Scrap Collection</button>
                          <button className={`text-start text-xl ${theme? 'text-dark': 'text-white'} hover:text-green-exact`}>Dismantling Services </button>
                          <button className={`text-start text-xl ${theme? 'text-dark': 'text-white'} hover:text-green-exact`}>Zero Waste Services</button>
                        </div>
                      </div>
                    </div>
                  </div>
              )
  })}
        </div>
        
        <Contact/>
        <div className=""></div>
        <Footer/>
    </div>
  )
}
}
export default Services