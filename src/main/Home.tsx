import React, { useState, useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import {Props} from '../../@types/main'
import { AuthContext } from '../context/AuthContext'

import recycleLogo from '../assets/recycle-20438.png'
import SyncLoader from 'react-spinners/SyncLoader'
function Home() {
  const {theme, setTheme} = useContext(AuthContext) as Props

  
  //   <div className={`${theme? 'bg-sun-light' : 'bg-sun-dark'} bg-sun-dark flex flex-col gap-y-20 h-screen items-center justify-center`} >
      // <SyncLoader
      //   size={20}
      //   color="#36d7b7"
      // />
      // </div>
  
  return (
    <div className={theme? 'relative ' : 'relative dark-one '} style={{}}>
    <header >
      <Header/>
    </header>
    <main className={theme? '' : 'dark-one bg-sun-darkmode'}>
      <Main />
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Home