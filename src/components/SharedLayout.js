import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Fotter from './Fotter'
import Foot from './Foot'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
      <Foot/>
    </>
  )
}

export default SharedLayout