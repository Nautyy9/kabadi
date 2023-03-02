import React, { useContext ,useEffect, useState} from 'react'
import { useMatch } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import { Props } from '../../@types/main'
import { AuthContext } from '../context/AuthContext'
import { data } from '../utils/privacy&termsData'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function Privacy() {
  const privacy = useMatch('/privacy-policy')
  const terms  = useMatch('/terms-and-conditions')
  const checkPrivacyRoute = privacy?.pathname.slice(1)
  const checkTermsRoute = terms?.pathname.slice(1)


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
  },[terms, privacy])

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
    <div className={theme? 'bg-sun-light  text-sun-light h-max' : 'text-sun-dark dark-one bg-sun-darkmode h-max'}>
      <Header/>
      <div className="h-max w-2/3 mx-auto  pt-40">

      {data?.map((val, ind) =>{
        if(checkPrivacyRoute === val.route || checkTermsRoute === val.route) return (
          <div key={ind} className="h-max    text-sun-dark">
            <div className="flex justify-between border-b-2 pb-5 ">
              <h1 className='text-5xl font-bold mb-4'>{val.head}</h1>
              <div className={`${theme ? 'bg-gray-200':"bg-[#171717]"} flex justify-center items-center px-5 py-2 rounded-xl`}>
                <h3>{val.date}</h3>
              </div>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10   rounded-xl px-14  flex flex-col gap-y-10`}>
              <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_1?.head}</h2>
                <p className='text-lg'>{val.data_1.text}</p>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10   rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_2.head}</h2>
                {/* {val.data_2.text && <p className='text-lg'>{val.data_2.text}</p>} */}
                {val.data_2.text_1 && <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_2.text_1}</li>
                  <li>{val.data_2.text_2}</li>
                  <li>{val.data_2.text_3}</li>
                  <li>{val.data_2.text_3}</li>
                </ol>}
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10   rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_3.head}</h2>
                {val.data_3.text_1 && <p className='text-lg'>{val.data_3.text_1}</p>}
                <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_3.text_2}</li>
                  <li>{val.data_3.text_3}</li>
                  <li>{val.data_3.text_4}</li>
                  <li>{val.data_3.text_5}</li>
                  <li>{val.data_3.text_6}</li>
                  {(val.data_3.text_7 && val.data_3.text_8) && 
                      <>
                      <li>{val.data_3.text_7}</li>
                      <li>{val.data_3.text_8}</li>
                      </>
                  
                }
                </ol>
                {!val.data_3.text_8 && <p className='text-xl text-gray-400 uppercase'>{val.data_3.text_6}</p>}
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10   rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_4.head}</h2>
                <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_4.text_1}</li>
                  <li>{val.data_4.text_2}</li>
                  {val.data_4.text_3 && <>
                  <li>{val.data_4.text_3}</li>
                  <li>{val.data_4.text_4}</li>
                  </> 
                  }

                </ol>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_5.head}</h2>
                <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_5.text_1}</li>
                  <li>{val.data_5.text_2}</li>
                  <li>{val.data_5.text_3}</li>
                  <li>{val.data_5.text_4}</li>
                  <li>{val.data_5.text_5}</li>

                </ol>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_6.head}</h2>
                {val.data_6.text && <p className='text-lg'>{val.data_6.text}</p>}
              
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_7.head}</h2>
                <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_7.text_1}</li>
                  <li>{val.data_7.text_2}</li>
                  <li>{val.data_7.text_3}</li>
                  <li>{val.data_7.text_4}</li>
                  <li>{val.data_7.text_5}</li>
                  {val.data_7.text_6 && <li>{val.data_7.text_5}</li>} 

                </ol>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_8.head}</h2>
                {val.data_8.text && <p className='text-lg'>{val.data_8.text}</p>}
                {val.data_8.text_1 && <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_8.text_1}</li>
                  <li>{val.data_8.text_2}</li>
                  <li>{val.data_8.text_3}</li>
                  <li>{val.data_8.text_4}</li>
                  <li>{val.data_8.text_5}</li>

                </ol>}
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_9.head}</h2>
                <p className='text-lg'>{val.data_9.text}</p>
            </div>
            <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_10.head}</h2>
                {val.data_10.text && <p className='text-lg'>{val.data_10.text}</p>}
                {val.data_10.text_1 && <ol  className='list-decimal text-lg flex flex-col gap-y-5'>
                  <li>{val.data_10.text_1}</li>
                  <li>{val.data_10.text_2}</li>
                </ol>
                }
            </div>
            {val.data_11 && <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_11?.head}</h2>
                <p className='text-lg'>{val.data_11?.text}</p>
            </div>
            }
            {val.data_12 && <div className= {`${theme ? 'bg-gray-200':"bg-[#171717] "} my-20 h-max py-10  rounded-xl px-14 flex flex-col gap-y-10`}>
                <h2 className='text-4xl text-gray-600 font-semibold '>{val.data_12?.head}</h2>
                <p className='text-lg'>{val.data_12?.text}</p>
            </div>
            }
          </div>
        )
      })}
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Privacy