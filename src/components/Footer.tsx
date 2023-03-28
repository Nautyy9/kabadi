import React,{useContext} from 'react'
import {AiOutlineInstagram, AiOutlineTwitter,AiFillLinkedin, AiFillFacebook, AiFillHeart} from 'react-icons/ai'
import { Link, useMatch, useParams } from 'react-router-dom'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
function Footer() {
  const params = useParams();

  const contactMatch = useMatch('/contactus')
  const serviceMatch = useMatch(`/services/${params.id}` );
  const {theme, setTheme} = useContext(AuthContext) as Props
  
  

  return (
    <div className={`relative bg-sun-darkmode mt-20 footer ${(contactMatch || serviceMatch) && (theme ? " -gap-20 text-black shadow-xl -gap-20" : " text-white")}`}>
      <div className={`${(contactMatch || serviceMatch) ? (theme ? "hidden bg-sun-light -gap-20 text-black shadow-xl -gap-20 lg:h-80 py-20  lg:grid lg:grid-flow-col lg:grid-cols-6 justify-center lg:justify-start lg:items-start" : "hidden bg-black  text-white lg:h-80 py-20  lg:grid lg:grid-flow-col lg:grid-cols-6 justify-center lg:justify-start lg:items-start ") : 'hidden lg:h-80 py-20  text-sun-dark bg-sun-light   lg:grid lg:grid-flow-col lg:grid-cols-6 justify-center lg:justify-start lg:items-start'} `}>
          <div className="flex flex-col items-center  lg:col-span-1 mt-10  col-span-1 ">
              <div className="flex flex-col gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Businesses</h1>
                <Link to={`/services/epr`} className='decoration-slice ' >EPR</Link>
                <Link to={`/services/circular-economy`} className='decoration-slice ' >Circular Economy</Link>
                <Link to={'/services/shredding-service'} className='decoration-slice ' >Paper Shredding</Link>
              </div>
          </div>
          <div className="flex flex-col items-center lg:col-span-1 mt-10 ">
              <div className="flex flex-col  gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Individuals</h1>
                <Link to={"/services/vehicle-scrapping"} className='decoration-slice ' >Vehicle Scrapping</Link>
                <Link to={"/services/zero-waste-society"} className='decoration-slice ' >Zero Waste Society</Link>
              </div>
          </div>
          <div className=" flex flex-col items-center lg:col-span-1 mt-10 ">
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-xl  text-green-exact  font-semibold'>Company</h1>
                <Link to={"/aboutus"} className='decoration-slice ' >About Us</Link>
                <Link to={"/careers"} className='decoration-slice ' >Careers</Link>
            </div>
              
          </div>
          <div className=" flex flex-col items-center lg:col-span-1 mt-10 ">
              <div className="flex flex-col gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Help</h1>
                <Link to={"/contactus"} className='decoration-slice '>Contact Us</Link>
                <Link to={"/privacy-policy"} className='decoration-slice '>Privacy Policy</Link>
                <Link to={"/terms-and-conditions"} className='decoration-slice '>Terms & Conditions</Link>
              </div>
          </div>
          <div className=" flex-1 flex flex-col justify-center items-center lg:col-span-2">
            <div className="flex flex-col items-center w-5/6 gap-y-3">
              <div className="flex  gap-y-4 lg:gap-x-4">
                <a href="/">
                  <div className="flex gap-x-2">
                  <img src="/images/logo.svg" className='h-10 w-10' alt="KabadiLogo" />
                  <p className='text-center m-auto text-2xl font-bold border-b-4 pb-0.5 border-green-exact text-green-exact'>KABADI</p> 
                  </div>
                </a>
              <span className='hidden lg:flex border-l-2 my-auto h-10 ml-8 w-max mr-0'></span>
              <div className=" flex flex-row gap-x-1">
                <a href=""><AiOutlineInstagram  className='h-8 w-8'></AiOutlineInstagram></a>
                <a href=""><AiFillFacebook  className='h-8 w-8'></AiFillFacebook></a>
                <a href=""><AiOutlineTwitter  className='h-8 w-8'></AiOutlineTwitter></a>
                <a href=""><AiFillLinkedin  className='h-8 w-8'></AiFillLinkedin></a>
              </div>
              </div>
              <p className='text-md'>+91-1234567890</p>
              <p className='text-md'>abc@xyz.com</p>
              <p className='text-md mb-4'>3rd Floor, Jyoti Cineplex Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh - 462023</p>
            </div>
          </div>
      </div>
      <div className={` ${(contactMatch || serviceMatch) ? (theme ? "lg:hidden pt-20 gap-y-10 flex flex-col  bg-white text-black " : "lg:hidden bg-black text-white pt-20 gap-y-10  flex flex-col "): 'lg:hidden pt-20 gap-y-10 flex flex-col bg-sun-light text-sun-dark '} `}>
          <div className="order-2 gap-x-2 flex justify-around">
          <div className=" flex flex-col items-center  lg:col-span-1 mt-10  col-span-1 ">
              <div className="flex flex-col gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Businesses</h1>
                <Link to={`/services/epr`} className='decoration-slice ' >EPR</Link>
                <Link to={`/services/circular-economy`} className='decoration-slice ' >Circular Economy</Link>
                <Link to={'/services/shredding-service'} className='decoration-slice ' >Paper Shredding</Link>
              
                </div>
          </div>
          <div className=" flex flex-col items-center  lg:col-span-1 mt-10 ">
              <div className="flex flex-col gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Individuals</h1>
                <Link to={"/services/vehicle-scrapping"} className='decoration-slice ' >Vehicle Scrapping</Link>
                <Link to={"/services/zero-waste-society"} className='decoration-slice ' >Zero Waste Society</Link>
                </div>
          </div>
          </div>
          <div className="order-3 gap-x-2 flex justify-around">
          <div className="order-5 flex flex-col items-center lg:col-span-1 mt-10 ">
            <div className='flex flex-col gap-y-3'>
                <h1 className='text-xl  text-green-exact  font-semibold'>Company</h1>
                <Link to={"/aboutus"} className='decoration-slice ' >About Us</Link>
                <Link to={"/careers"} className='decoration-slice ' >Careers</Link>
                </div>
          </div>
          <div className=" order-6 flex flex-col items-center lg:col-span-1 mt-10 ">
              <div className="flex flex-col gap-y-3 ">
                <h1 className='text-xl  text-green-exact  font-semibold'>Help</h1>
                <Link to={"/contactus"} className='decoration-slice '>Contact Us</Link>
                <Link to={"/privacy-policy"} className='decoration-slice '>Privacy Policy</Link>
                <Link to={"/terms-and-conditions"} className='decoration-slice '>Terms & Conditions</Link>
              </div>
          </div>
          </div>
          <div className="order-1 flex-1 flex flex-col justify-center items-center lg:col-span-2">
            <div className="flex flex-col items-center w-5/6 gap-y-3">
              <div className="flex flex-col gap-y-4 lg:gap-x-8">
                <a href="/">
                  <div className="flex gap-x-2">
                  <img src="/images/logo.svg" className='h-10 w-10' alt="KabadiLogo" />
                  <p className='text-center m-auto text-2xl font-bold border-b-4 pb-0.5 border-green-exact text-green-exact'>KABADI</p> 
                  </div>
                </a>
              <span className='hidden lg:block border-l-2 my-auto h-10'></span>
              <div className=" flex flex-row gap-x-1">
                <a href=""><AiOutlineInstagram  className='h-8 w-8'></AiOutlineInstagram></a>
                <a href=""><AiFillFacebook  className='h-8 w-8'></AiFillFacebook></a>
                <a href=""><AiOutlineTwitter  className='h-8 w-8'></AiOutlineTwitter></a>
                <a href=""><AiFillLinkedin  className='h-8 w-8'></AiFillLinkedin></a>
              </div>
              </div>
              <p className='text-md'>+91-1234567890</p>
              <p className='text-md'>abc@xyz.com</p>
              <p className='text-md mb-4'>3rd Floor, Jyoti Cineplex Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh - 462023</p>
            </div>
            
          </div>
          <div className="order-4 flex flex-col items-center">
              <h3 className='text-xl flex'>Made with <span><AiFillHeart className='text-red-600  mt-1 mx-1 '></AiFillHeart></span> in India, for the World</h3>
              <p>all copyrights reserved by @ ASAR Green Kabadi Pvt Ltd.</p>
            </div>
      </div>
    </div>
  )
}

export default Footer