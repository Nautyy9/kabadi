import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './components/Contact'
import Services from './Content/Services'
import Service from './Content/Service'
import Home from './main/Home'
import { About, Careers, Franchise,  PrivacyTerms,  } from './components'

function App() {

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
