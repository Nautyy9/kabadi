import React , {useContext, useEffect, useState, useId}from 'react'
import { SyncLoader } from 'react-spinners'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import Footer from './Footer'
import Header from './Header'

const dataArr =[
  {head: "Vision", text:"Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling."},
  {head: "Mission", text:"Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled."}, 
  {head: "Goal", text:"Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals."} 
]

const dataArr2 =[
  {img:'images/About Us _ Waste Management Company - The Kabadiwala-1.svg', head: "Transparency", text:"Our App enables users to access the impact marked through the waste sold and recycled in terms of resources and energy saved."},
  {img:'images/About Us _ Waste Management Company - The Kabadiwala-2.svg', head: "Traceability", text:"Our 4 different apps for users, pickup executives, city managers & MRF centers are helping us organize the unorganized waste sector in terms of keeping a track record of waste sold, segregated, bailed, transported, and recycled."}, 
  {img:'images/About Us _ Waste Management Company - The Kabadiwala-3.svg', head: "Scalability", text:"Our 4 different apps for users, pickup executives, city managers & MRF centers are helping us organize the unorganized waste sector in terms of keeping a track record of waste sold, segregated, bailed, transported, and recycled."} 
]


function About() {
  const uid = useId()
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
    <div className={theme? ' bg-sun-light text-black' : 'text-white dark-one bg-sun-darkmode'}>
      <div className="relative h-max flex flex-col">

      <Header/>
      <div className='mt-40 h-max w-5/6 mx-auto text-sun-dark'>
        <h1 className='text-5xl font-bold mb-5'>About Us</h1>
        <p className='text-lg'>The Kabadiwala.com (Start-up India Recognized) is a product of Asar Green Kabadi Pvt. Ltd. A technology-driven company working on SaaS (Software as a Service) based model to organize the waste management sector.</p>
        <h2 className='text-4xl text-gray-500 font-semibold mt-20 mb-10 '>Founders Message</h2>
        <h3 className='text-3xl mb-5 text-green-exact'>“Waste is never a waste, it’s rather an opportunity to something new”</h3>
        <p className='text-lg'>Mr. Anurag Asati, who co-founded The Kabadiwala with Kavindra Raghuwanshi in 2014 always wanted to do something out of the box but he had never anticipated something as bizarre as “waste” would drive him to bring the solution until he detected the biggest loopholes associated with waste management sector by then.
          The unorganized sector made it a task for him to sell his own household scrap, it is then that he decided to infuse technology into the sector making it easy for thousands of consumers to sell scrap online.
          But, this wasn’t enough to mark a significant impact, on households, The Kabadiwala gradually started catering to small to big businesses, corporates to institutions with their Extended Producer Responsibility (EPR), assisted the state government in managing the city’s huge dumps at The material recovery facility (MRF Centers) through involving waste workers from the informal sector, helping them earn the wage they deserve. Today, The Kabadiwala has become a one-stop solution to every waste chaos.</p>
        <h2 className='text-4xl text-gray-500 font-semibold mt-20 mb-10 '>Our Core Values</h2>
        <div className=' flex gap-x-20 gap-y-10 flex-wrap '>
        {dataArr?.map((inval, ind) => {
            return (
          <div  key={ind}  className={` md:w-60 md:h-[350px] min-h-max  rounded-xl ${ theme? 'bg-gray-light' : 'bg-gray-dark'}`}>
            <h3 className='text-3xl text-center pt-2 font-sans text-green-exact' >{inval?.head}</h3>
            <p className='text-lg ml-6 my-4 w-5/6 font-sans'>{inval?.text}</p>
          </div>
        )})}
        </div>
        <h2 className='text-4xl text-gray-500 font-semibold mt-20 mb-10 '>Our Belief</h2>
        <p className='text-lg mb-7'>We believe that India can be a greener and cleaner country, as every household commits to getting their dry scrap recycled, not only resources can be saved from over-exploitation, but the landfills with mixed harmful garbage can be eradicated.</p>
        <div className={` flex flex-col mx-auto md:w-[600px] lg:w-[500px] lg:mx-0 py-10 gap-y-10 min-h-max  rounded-xl ${ theme? 'bg-gray-light' : 'bg-gray-dark'}`}>
          <div className="w-11/12  mx-auto">
            <h3 className='text-3xl text-center py-4 font-semibold  font-sans text-green-exact' >Minimizing landfills</h3>
            <ul style={{listStyleType: 'circle'}} className='flex flex-col gap-y-4 w-11/12 mx-auto'>
              <li className='text-lg '>To mark a larger impact, along with serving households, The Kabadiwala is a recycling partner to small to big businesses and corporates to institutions with the aim to build a conscious ecosystem on a societal level.</li>
              <li className='text-lg '>To accelerate recycling, The Kabadiwala manages Bhopal city’s huge garbage dumps at 4 Material Recovery Facilities commonly known as MRF centers. Where every day, more than 50 kgs of waste are segregated by our waste workers.</li>
              <li className='text-lg '>The Kabadiwala’s campaigns with big organizations like Tetra Pak India and Indian Sleep products Federations (ISPF) based on recycling of daily utility products like Used beverage cartons and used mattresses respectively helps us maximize recycling extensively.</li>
            </ul>
          </div>
          <div className="w-11/12  mx-auto">
            <h3 className='text-3xl text-center py-4 font-semibold font-sans text-green-exact' >Maximizing Recycling</h3>
            <ul style={{listStyleType: 'circle'}} className='flex flex-col gap-y-4 w-11/12 mx-auto'>
              <li className='text-lg '>We get the dry segregated waste recycled as you sell your scrap to us. If we inculcate the habits of “avoiding tossing trash anywhere” and “adopting daily waste segregation”, remember we’re coming one step ahead in reducing landfills.</li>
              <li className='text-lg '>Landfills are spreading across India at a fast pace making it more complex each day to manage the waste management value chain.But, this can be tackled only when we start waste management from our homes in the way of waste segregation.</li>
              <li className='text-lg '>Waste segregation is the process of differentiating dry and wet waste and disposing of it into two different bins.</li>
            </ul>
          </div>
        </div>
        <h2 className='text-4xl mt-20 mb-10 text-gray-500'>The Kabadiwala brings you</h2>
        <div className="  flex flex-wrap ">
            {
              dataArr2?.map((val, ind) =>{
                return(
                  <div key={uid+ind} className={`min-h-max  lg:h-96 w-max md:w-80 mb-10 pb-5 mx-0  md:mr-10 rounded-xl flex py-10 items-center  md:items-start px-10  flex-col gap-y-4`}>
                    <img src={val.img} alt="_img" className='h-16 w-16' />
                    <h3 className='text-3xl text-center pt-2-exact'>{val.head}</h3>
                    <p className=''>{val.text}</p>
                  </div>
                )
              })
            }
        </div>
        <div className="card bg-[#d8ffcb] h-max py-10 rounded-xl flex flex-col gap-y-5 px-10 ">
          <h2 className='text-4xl text-gray-800 font-semibold   '>The Way Forward</h2>
          <p className='text-lg text-black'>We look forward to creating an ecosystem within the social system that of conscious waste disposal behavior, increased awareness that promotes waste segregation at source, and enthusiasm towards recycling as one of the effective waste solutions in India.</p>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default About