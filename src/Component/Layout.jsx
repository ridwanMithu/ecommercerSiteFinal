import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
     <Navbar />
    </div>
    <div>
      <Outlet />
    </div>
  )
}

export default Layout