import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import "./layout.scss"

export default function Layout() {
  return (
    <>
        <div className='app'>
                <Navbar/>
                 <Outlet/>
                <Footer/>
        </div>
    </>
  )
}
