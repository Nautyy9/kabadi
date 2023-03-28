import { useNavigate } from 'react-router-dom'
import scrapvid from '../assets/scrapvid.mp4'

function Section1() {
  const nav = useNavigate()
  return (
    <div className='section1 overflow-hidden text-white'>
    <div className=' relative   flex flex-row justify-center items-center'>
      <video autoPlay loop muted  src={scrapvid} className=" video w-full filter brightness-50">
      </video>
      <div className="w-11/12 sm:w-full flex flex-col justify-center items-center absolute">

<h1 className=' text-7xl  xs:text-8xl font-medium sm:font-extrabold '>
      Got <span className='suii'>Scrap</span> <br/>Sell it to Us
  </h1> 
  <p className=' text-2xl sm:w-11/12 lg:w-3/4 mt-4 text-center'>Sell us your recyclable wastes and help contribute to the circular economy.</p>
  <button onClick={() =>nav('/download')} className='transition duration-100 ease-in bg-sun-dark-btn hover:bg-sun-dark-btn-hover  cursor-pointer p-4 mt-8 mb-2 rounded-md text-white hover:text-black  font-semibold'>Download the app</button>
  <button className='transition duration-200 ease-in border-2 p-3 m-1 hover:bg-sun-dark-btn-hover hover:border-transparent   rounded-md text-white hover:text-black border-white font-medium'>For Business</button>
  </div>
    </div>
   
    </div>
  )
}

export default Section1