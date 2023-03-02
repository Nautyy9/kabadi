import React, {useContext, useEffect, useRef, useState, useCallback } from 'react'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { Props} from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Confetti from 'react-confetti'
import { useMatch, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { SyncLoader } from 'react-spinners'

function Contact() {
    const [formDetials, setFormDetials] = useState({
        name: '',
        email: '',
        phone: '', 
        subject: '',
        message: '' 
    }) 
    const [msg, setMsg] = useState()
    const nav = useNavigate();
    const nameRef = useRef<HTMLInputElement | null>(null);
    const phnRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const subRef = useRef<HTMLInputElement | null>(null);
    const msgRef = useRef<HTMLTextAreaElement | null>(null);

    const {theme, setTheme} = useContext(AuthContext) as Props

    const match = useMatch('/contactus');

    const onSubmit =   (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setFormDetials( (prev: any) => ({
            ...prev,
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            phone: phnRef.current?.value,
            subject: subRef.current?.value,
            message: msgRef.current?.value
        }))
    
    }

    useEffect(() => {
        const controller = new AbortController();
        try{
            if(formDetials?.name !== "" && formDetials?.email !== "" && formDetials?.phone !== "" && formDetials?.subject !== "" && formDetials?.message !== "" ){
                axios.post('https://kabadi-backend.onrender.com/home', {
                    formDetials
                })
                .then((data) =>{
                    setMsg(data.data.msg);
                })
                .catch((error) =>{
                    alert(error);
                })
                
            }
            else {
            }
    }
    catch(err) {
        alert(controller.signal.aborted)
    }
    return () => controller.abort();

    },[onSubmit])



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
  
    if(loading && match) {
      return (
         <div className={`${theme? 'bg-sun-light' : 'bg-sun-dark'} bg-sun-dark flex flex-col gap-y-20 h-screen items-center justify-center`} >
        <SyncLoader
          size={20}
          color="#36d7b7"
        />
        </div>
      )
    }
    
    if(!match) {
    if(!msg)
    return (
   
    
    <div className={`w-full  mt-20`}>
         <div className={theme? ' bg-sun-light text-sun-light' : 'text-sun-dark dark-one bg-sun-darkmode'}>
            <h1  className={`font-semibold my-6 text-6xl  text-center text-sun-dark`}>Get in touch with us</h1>
            <p className={`text-center  font-semibold text-xl text-gray-500 mb-20 `}>Any question or remarks? Just write us<span className=' ml-2 text-green-exact'>message!</span> </p>
        <div className="flex container bg-sun-dark w-11/12 lg+:w-2/3 mx-auto rounded-xl">
            <div className=" hidden lg:flex items-center w-2/3  rounded-l-xl  bg-sun-dark-btn-hover">
                <div className=" flex flex-col w-5/6 mx-auto text-gray-700 ">
                    <h1 className='font-mono font-bold mb-4 text-3xl  text-center'>Contact Information</h1>
                    <p className='mt-1 text-center text-xl '>Fill up the form and our Team will get back to you within 24 hours</p>
                    <button className='mt-10 text-xl font-semibold flex   lg:gap-x-6  items-center'><FiPhone></FiPhone>+91-1234567890</button>
                    <button className='mt-10 text-xl font-semibold flex    lg:gap-x-6  items-center'><AiOutlineMail className='mt-1'></AiOutlineMail>abc@xyz.com</button>
                    <p className=' text-xl mt-10 font-semibold flex  lg:gap-x-6  items-center'><GoLocation className='w-8 h-8'></GoLocation>3rd Floor, Jyoti Cineplex Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh - 462023</p>
                </div>
            </div>
            <div className={`w-full rounded-l-xl lg:rounded-l-none rounded-r-xl pt-10 ${theme ? 'bg-[#fafafa]' : 'bg-gray-dark'}`}>
                <form onSubmit={(e) =>{onSubmit(e)}}>
                    <div className="flex flex-col  w-5/6 mx-auto gap-2">
                        <label htmlFor='name' className='text-gray-text' >Name</label>
                        <input id="name" ref={nameRef}  type='text' placeholder='Name' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500  focus:border-2 text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                    </div>
                    <div className="flex flex-col mt-10 w-5/6 mx-auto gap-2">
                        <div className="flex gap-x-6">
                            <label htmlFor='ph-no' className='text-gray-text w-1/2' >Phone Number</label>
                            <label htmlFor='add' className='text-gray-text w-1/2 ' >Email Address</label>
                        </div>
                        <div className="flex gap-x-6">
                            <input ref={phnRef} id="ph-no" type='text' placeholder='Phone Number' className=' border  border-gray-500 p-3 focus:border-green-500 focus:border-2 focus:outline-none  w-1/2  text-sun-dark  rounded-lg  bg-transparent transition duration-100 ease-in '/> 
                            <input ref={emailRef} id="add" type='email' placeholder='Email' className='border  border-gray-500 p-3 focus:border-green-500 focus:border-2 focus:outline-none w-1/2  text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 w-5/6 mx-auto gap-2">
                        <label htmlFor='sub' className='text-gray-text' >Subject</label>
                        <input ref={subRef} id="sub" type='text' placeholder='Subject' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500 focus:border-2  text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                    </div>
                    <div className="flex  flex-col mt-10  w-5/6 mx-auto gap-2">
                        <label htmlFor='msg' className='text-gray-text' >Message</label>
                        <textarea ref={msgRef} id="msg" rows={4} placeholder='Message' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500 focus:border-2  text-sun-dark transition duration-100 ease-in rounded-lg  bg-transparent'/> 
                    </div>
                    <input type="submit" value="Submit" className="bg-sun-dark-btn text-sun-light p-4 rounded-xl mb-10 mt-10 ml-20"/>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
  else {
    return (
      <div className="w-full = relative mt-20">

        <div className=" flex container h-lg+  w-11/12 lg+:w-2/3 mx-auto rounded-xl">
        <Confetti gravity={0.04} className='w-11/12 rounded-xl mx-auto h-full'>
            
        </Confetti>
        <h1 className='z-20 text-4xl font-bold w-max m-auto text-green-exact '>{msg}</h1>
        </div>
      </div>
    )
  }
}
else {
    if(!msg)
    return (
        <div className={theme? ' bg-sun-light text-sun-light' : 'text-sun-dark dark-one bg-sun-darkmode'}>
          
        <Header></Header>
        <div className={`w-full  pt-40 ${match ? '' : ''} `}>
                <h1  className='font-semibold my-6 text-6xl text-gray-text text-center '>Get in touch with us</h1>
                <p className={`text-center  font-semibold text-xl text-gray-500 mb-20 `}>Any question or remarks? Just write us<span className='ml-2 text-green-exact'>message!</span> </p>
            <div className="flex container w-11/12 lg+:w-2/3 mx-auto rounded-xl">
                <div className=" hidden lg:flex items-center w-2/3  rounded-l-xl  bg-sun-dark-btn-hover">
                    <div className=" flex flex-col w-5/6 mx-auto text-gray-700">
                        <h1 className='font-mono font-bold mb-4 text-3xl  text-center'>Contact Information</h1>
                        <p className='mt-1 text-center text-xl '>Fill up the form and our Team will get back to you within 24 hours</p>
                        <button className='mt-10 text-xl font-semibold flex   lg:gap-x-6  items-center'><FiPhone></FiPhone>+91-1234567890</button>
                        <button className='mt-10 text-xl font-semibold flex    lg:gap-x-6  items-center'><AiOutlineMail className='mt-1'></AiOutlineMail>abc@xyz.com</button>
                        <p className=' text-xl mt-10 font-semibold flex  lg:gap-x-6  items-center'><GoLocation className='w-8 h-8'></GoLocation>3rd Floor, Jyoti Cineplex Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh - 462023</p>
                    </div>
                </div>
                <div className={`w-full rounded-l-xl lg:rounded-l-none rounded-r-xl pt-10 ${theme ? 'bg-gray-100/90' : 'bg-gray-dark'}`}>
                    <form onSubmit={(e) =>{onSubmit(e)}}>
                        <div className="flex flex-col  w-5/6 mx-auto gap-2">
                            <label htmlFor='name' className='text-gray-text' >Name</label>
                            <input id="name" ref={nameRef}  type='text' placeholder='Name' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500  focus:border-2 text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                        </div>
                        <div className="flex flex-col mt-10 w-5/6 mx-auto gap-2">
                            <div className="flex gap-x-6">
                                <label htmlFor='ph-no' className='text-gray-text w-1/2' >Phone Number</label>
                                <label htmlFor='add' className='text-gray-text w-1/2 ' >Email Address</label>
                            </div>
                            <div className="flex gap-x-6">
                                <input ref={phnRef} id="ph-no" type='text' placeholder='Phone Number' className=' border  border-gray-500 p-3 focus:border-green-500 focus:border-2 focus:outline-none  w-1/2  text-sun-dark  rounded-lg  bg-transparent transition duration-100 ease-in '/> 
                                <input ref={emailRef} id="add" type='email' placeholder='Email' className='border  border-gray-500 p-3 focus:border-green-500 focus:border-2 focus:outline-none w-1/2  text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                            </div>
                        </div>
                        <div className="flex flex-col mt-10 w-5/6 mx-auto gap-2">
                            <label htmlFor='sub' className='text-gray-text' >Subject</label>
                            <input ref={subRef} id="sub" type='text' placeholder='Subject' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500 focus:border-2  text-sun-dark transition duration-100 ease-in rounded-lg bg-transparent'/> 
                        </div>
                        <div className="flex  flex-col mt-10  w-5/6 mx-auto gap-2">
                            <label htmlFor='msg' className='text-gray-text' >Message</label>
                            <textarea ref={msgRef} id="msg" rows={4} placeholder='Message' className='border  border-gray-500 p-3 focus:outline-none focus:border-green-500 focus:border-2  text-sun-dark transition duration-100 ease-in rounded-lg  bg-transparent'/> 
                        </div>
                        <input type="submit" value="Submit" className="bg-sun-dark-btn text-sun-light p-4 rounded-xl mb-10 mt-10 ml-20"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
      )
      else {
        return (
            <div className={theme? ' bg-sun-light text-sun-light' : 'text-sun-dark dark-one bg-sun-darkmode'}>
            <Header/>
          <div className="w-full  relative mt-20">
    
            <div className=" flex container h-lg+  w-11/12 lg+:w-2/3 mx-auto rounded-xl">
            <Confetti gravity={0.04} className='w-11/12 rounded-xl mx-auto h-full'>
                
            </Confetti>
            <h1 className='z-20 text-4xl font-bold w-max m-auto text-green-exact '>{msg}</h1>
            </div>
          </div>
          <Footer/>
            </div>
        )
      }
    }

}

export default Contact