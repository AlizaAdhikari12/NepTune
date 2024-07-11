import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../index.css'

import { NavbarSection } from './Navbar/NavbarSection'

export const Layout =()=>{

    return(
        <>
       <NavbarSection/>
 
        <Outlet/>
      
        </>
    )
}