import React from 'react'
import Header from './componet/Header/Header'
import Footer from './componet/Footer/Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
