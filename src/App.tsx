import { useEffect, useState, useContext } from 'react'
import {Route, Routes, useLocation, useMatch, useParams} from 'react-router-dom'
import Contact from './components/Contact'
import Services from './Content/Services'
import Service from './Content/Service'
import Home from './main/Home'
import { About, Careers, Franchise,  PrivacyTerms,  } from './components'
import { SyncLoader } from 'react-spinners'
import { AuthContext } from './context/AuthContext'
import { Props } from '../@types/main'

function App() {
  const routes = useLocation()  

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
  },[routes])

  if(loading) {
    return (
      <div className={` ${theme ? "bg-white": "bg-black"}  flex flex-col gap-y-20 h-screen items-center justify-center`}>
      <SyncLoader
        size={20}
        color="#36d7b7"
      />
      </div>
    )
  }
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/franchise' element={<Franchise/>}/>
        <Route path='/privacy-policy' element={<PrivacyTerms/>}/>
        <Route path='/terms-and-conditions' element={<PrivacyTerms/>}/>
        <Route path='/services' element={<Service/>}>
          <Route path=':id' element={<Services/>}/>
        </Route>
      </Routes>
  )
}

export default App
