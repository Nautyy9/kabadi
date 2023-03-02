import React, {useEffect} from 'react'
import { Outlet, useMatch, useNavigate, useParams } from 'react-router-dom'
import Services from './Services';

function Service() {
    const navigate = useNavigate();
    const params = useParams();
    const match = useMatch('/services')
    
    useEffect(() => {
      const controller = new AbortController()
      if(controller && match)
      navigate("/");
      return () => controller.abort();
    })
  return (
    <div className="">
      <Outlet/>
    </div>
  )
}

export default Service