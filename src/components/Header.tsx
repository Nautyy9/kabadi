import React, { useEffect, useState, useContext } from 'react'
import { Link, useMatch, useParams } from 'react-router-dom'
import Dropdown1 from '../Design/Dropdown1'
import Dropdown2 from '../Design/Dropdown2'
import Dropdown3 from '../Design/DropDown3'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import logo from '../../public/images/logo.svg'

function Header() {
  const {theme, setTheme} = useContext(AuthContext) as Props
  const [scroll, setScroll] = useState(0)
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0)
  const nav = useNavigate();
  const params = useParams();
  const contactMatch = useMatch('/contactus');
  const terms = useMatch('/terms-and-conditions');
  const privacy = useMatch('/privacy-policy');
  const home = useMatch('/')

  const serviceMatch = useMatch(`/services/${params.id}` );
  useEffect(() =>{
      const controller = new AbortController();
      window.addEventListener('scroll' , () => {
        const value = window.scrollY
        
        
        setScroll(value)
      })
      setWidth(window.innerWidth)
      return () =>{
        controller.abort()
      }
  })
  

  if(scroll <= 190 && width > 976)
  {
  return (

    <div className={`${home && (theme ? 'text-white ' : 'text-white')} ${( serviceMatch)&& (theme ?" -gap-20 text-white " : "text-white")} ${(contactMatch)&& (theme ?"bg-sun-light text-black shadow-md" : "text-sun-dark bg-sun-darkmode ")} ${(terms || privacy) && (theme ? "text-black" : "text-white")} top-0 fixed   h-20 flex-wrap w-screen  z-10  flex flex-row justify-between lg:justify-around `}>
        <div className=" text-xl flex items-center font-semibold ">
          <Link to='/'><img src={logo} className=' h-14 mt-1  rounded-full' alt='Kabadi Logo'/></Link>
        </div>
        <div className="hidden headerbtn  justify items-center lg:flex gap-5 xl:gap-10   pl-10 lg:pl-40">
          <button className="text-center text-md lg:text-lg xl:text-xl font-semibold hover:text-sun-dark-btn_hover"><Dropdown2/></button>
          <button className="text-center text-md lg:text-lg xl:text-xl font-semibold hover:text-sun-dark-btn_hover">Company</button>
          <button  onClick={() => nav('/contactus')} className="text-center text-lg font-semibold hover:text-sun-light-btn_hover">Careers</button>
        </div>
        <div className="hidden headerbtn justify items-center lg:flex gap-2 xl:gap-5 justify-between">
          <button className="text-center rounded-2xl border-2 py-1 px-3 text-lg font-semibold ">Check Rate List</button>
          <button className={`text-center text-lg font-semibold  ${theme? "text-white bg-sun-dark-btn " : "text-white bg-sun-dark-btn"} py-1 px-3 border-2 border-transparent rounded-2xl`}>Sell Scrap</button>
          {!theme ? <BsMoonFill  onClick={() => setTheme(true)} className='cursor-pointer  bg-blue-700/80 rounded-full h-10 w-10 p-2'/>: <BsSunFill onClick={() => setTheme(false)} className='cursor-pointer  h-10 w-10 p-2 rounded-full text-white bg-yellow-600/100'/>}
        </div>
        <div className="flex justify items-center lg:hidden  justify-evenly ">
          <Dropdown3 show={show} setShow={setShow}/>
        </div>
    </div>
    
  )
  }
  else if( width <= 976 && show === true ) {
    
    
    return (
      <div className={` ${( serviceMatch ||terms || privacy)&& (theme ?"bg-sun-light -gap-20 text-black shadow-xl " : "bg-black text-sun-light ")} top-0 lg:hidden shadow-md fixed  sm:h-60  gap-y-6 w-screen z-10 grid grid-flow-row   bg-sun-light text-sun-dark`} >
        <div className=" grid grid-flow-col  justify-between   mt-8 ">
        <Link to='/'><img src={logo} className='  h-14 mt-1   rounded-full' alt='Kabadi Logo'/></Link>
          <Dropdown3 show={show} setShow={setShow}/>   
        </div>
        <div className=" w-11/12 sm:w-2/3 mx-auto headerbtn justify items-center flex lg:hidden gap-2 xl:gap-5 justify-between">
          <button className={`text-center rounded-2xl border-2 ${theme? 'border-black' : 'border-white'} py-1 px-3 text-lg font-semibold hover:bg-sun-dark-btn-hover hover:border-transparent hover:text-black  `}>Check Rate List</button>
          <button className={`text-center text-lg font-semibold  ${theme? "text-sun-light bg-sun-dark-btn " : "text-sun-dark bg-sun-dark-btn"} py-1 px-3 border-2 border-transparent rounded-2xl hover:bg-sun-dark-btn-hover hover:text-black`}>Sell Scrap</button>

          {!theme ? <BsMoonFill  onClick={() => setTheme(true)} className='cursor-pointer  bg-blue-700/40 rounded-full h-10 w-10 p-2 text-white'/>: <BsSunFill onClick={() => setTheme(false)} className='cursor-pointer  text-white  h-10 w-10 p-2 rounded-full bg-yellow-500/100'/>}
        </div>
        <div className=" headerbtn w-11/12 justify items-center flex lg:hidden mx-auto mb-8 gap-5 xl:gap-10 justify-between ">
          <button className={`text-center text-md lg:text-lg xl:text-xl font-semibold ${theme ? 'hover:bg-gray-light':'hover:bg-gray-dark'} p-2 rounded-xl hover:text-sun-dark`}><Dropdown2/></button>
          <button className={`text-center text-md lg:text-lg xl:text-xl font-semibold hover:text-sun-dark ${theme ? 'hover:bg-gray-light':'hover:bg-gray-dark'} p-2 rounded-xl`}>Company</button>
          <button  onClick={() => nav('/contactus')} className={`text-center text-lg font-semibold hover:text-sun-dark ${theme ? 'hover:bg-gray-light':'hover:bg-gray-dark'} p-2 rounded-xl`}>Careers</button>
        </div>
  </div>
    )
  }
  else if(show === false && width <= 976 && scroll <= 190) {
    return (
    
      <div className={`lg:hidden top-0 fixed  h-20  w-screen z-10 grid grid-flow-row ${(contactMatch)&& (theme ?"bg-sun-light -gap-20 text-white shadow-xl -gap-20" : "bg-sun-dark text-sun-light")}  text-sun-dark`}>
         <div className=" grid    grid-flow-col justify-between ">
         <Link to='/'><img src={logo} className=' h-14 mt-3 ml-5  rounded-full' alt='Kabadi Logo'/></Link>
         <div className="mr-5 flex justify items-center lg:hidden  justify-evenly">
          <Dropdown3 show={show} setShow={setShow}/>
         </div>
        </div>
      </div>
    )
  }
  else 
  return( 
  <div className={`${(serviceMatch || privacy || terms)&& (theme ?"bg-sun-light  text-sun-dark shadow-xl -gap-20" : "bg-sun-dark text-sun-light")} ${(contactMatch )&& (theme ?"bg-sun-light  text-sun-dark shadow-xl " : "bg-sun-dark text-sun-light")} header shadow-md top-0 fixed opacity-90   h-20 flex-wrap w-screen z-10 flex flex-row justify-between lg:justify-around    bg-sun-light text-sun-dark`} >
      <div className=" text-xl flex items-center font-semibold ">
        <Link to='/'><img src={logo} className=' h-14 mt-1  ml-5  rounded-full' alt='Kabadi Logo'></img></Link>
      </div>
      <div className="hidden headerbtn  justify items-center lg:flex gap-5 xl:gap-10 pl-40 ">
          <button className="text-center text-md lg:text-lg xl:text-xl font-semibold "><Dropdown2/></button>
          <button className="text-center text-md lg:text-lg xl:text-xl font-semibold ">Company</button>
          <button  onClick={() => nav('/contactus')} className="text-center text-lg font-semibold ">Careers</button>
        </div>
        <div className="hidden headerbtn justify items-center lg:flex gap-2 xl:gap-5 justify-between">
          <button className={`text-center rounded-2xl border-2 ${theme? 'border-black' : 'border-white'} py-1 px-3 text-lg font-semibold   `}>Check Rate List</button>
          <button className={`text-center text-lg font-semibold  ${theme? "text-white bg-sun-dark-btn " : "text-white bg-sun-dark-btn"} py-1 px-3 border-2 border-transparent rounded-2xl`}>Sell Scrap</button>

          {!theme ? <BsMoonFill  onClick={() => setTheme(true)} className='cursor-pointer  bg-blue-700/40 rounded-full h-10 w-10 p-2 text-white'/>: <BsSunFill onClick={() => setTheme(false)} className='cursor-pointer  text-white  h-10 w-10 p-2 rounded-full bg-yellow-500/100'/>}
        </div>
        <div className="flex justify items-center  lg:hidden gap-10 justify-evenly mr-5">
          <Dropdown3 show={show} setShow={setShow}/>
          
        </div>
  </div>
  )
  }
 

export default Header