import React, { useState, useContext } from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
type Type = {

  show: boolean,
  setShow:  React.Dispatch<React.SetStateAction<boolean>>
}
function DropDown3({show, setShow}: Type) {
  const {theme, setTheme} = useContext(AuthContext) as Props

  

  if(!show)
  return (
    <button onClick={ () => setShow(!show)}><FaAngleDown className={`border-2 ml-5 border-green-exact    ${theme ? 'text-black' : 'text-white'}  hover:outline-none hover:border-green-exact  focus:animate-none transition rounded-full  p-2 h-9 w-9 mr-4`}/></button>
  )
  else
  return (
    <div>
      <button className='mt-1' onClick={ () => setShow(!show)}><FaAngleUp className={`border-2  border-green-exact hover:outline-none hover:border-green-exact ${theme ? 'text-sun-dark' : 'text-white'}   focus:animate-none transition rounded-full  p-2 h-9 w-9 mr-4`}/></button>
    </div>
  )
}

export default DropDown3