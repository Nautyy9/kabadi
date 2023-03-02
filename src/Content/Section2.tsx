import React, {useContext, useEffect} from 'react'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import img1 from '../assets/featured-abp-news.png'
import img2 from '../assets/featured-brand-ambassador-of-madhya pradesh.png'
import img3 from '../assets/featured-business-standard.png'
import img4 from '../assets/featured-dd-news.png'
import img5 from '../assets/featured-forbes.png'
import img6 from '../assets/featured-inshorts.png'
import img7 from '../assets/featured-patrika.png'
import img8 from '../assets/featured-red-fm-93.5.png'
import img9 from '../assets/featured-ted-x.png'
import anime from 'animejs/lib/anime.es.js';

function Section2() {

  useEffect(() => {
    
    anime({
      targets: ['.comp1', '.comp2','.comp3','.comp4','.comp5','.comp6','.comp7','.comp8','.comp9',],
      translateX: ['-300', '200'],
      
      duration: 6000,
      easing: 'linear',
      direction: 'alternate',
      loop: true,
})  })
    const {theme} = useContext(AuthContext) as Props
  return (
    <div  className={`h-80 text-sun-dark w-screen mx-auto overflow-hidden flex flex-col justify-center items-center ${theme? 'bg-gray-light' : 'bg-gray-dark'}`} >

        <h1 className="text-3xl font-bold text-gray-text">Appreciated & Featured by</h1>
        <div  className="flex gap-20 mt-14 w-11/12 md:w-10/12 lg+:w-3/4 2xl:w-1/2 mx-auto ">
            <div id={theme? 'carousel-light': 'carousel-dark'} className="justify-center   overflow-hidden animation cursor-pointer flex   gap-20  ">

            <img src={img1} className="comp1 h-20 w-20" alt="" />
            <img src={img2} className="comp2 h-20 w-36 " alt="" />
            <img src={img3} className="comp3 h-12 mt-2  w-40" alt="" />
            <img src={img4} className="comp4 h-16 mt-2  w-24" alt="" />
            <img src={img5} className="comp5 h-14 mt-2  w-24" alt="" />
            <img src={img6} className="comp6 h-20 w-32 " alt="" />
            <img src={img7} className="comp7 h-16 w-24 " alt="" />
            <img src={img8} className="comp8 h-20 w-20" alt="" />
            <img src={img9} className="comp9 h-14  w-20" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section2