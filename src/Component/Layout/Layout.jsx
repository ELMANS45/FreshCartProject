import React, { useContext, useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { Usercontext } from '../Context/UserContext.jsx'
export default function Layout() {
  const {setUser} = useContext(Usercontext)
  let navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('uToken')){
      setUser(localStorage.getItem('uToken'))
    }
    else{
      navigate('/login')
    }
  },[])
  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}
