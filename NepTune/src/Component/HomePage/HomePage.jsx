import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
export const HomePage =()=>{
return(
     <>
        <h1> Hello world</h1>
        <Link to='/Downloaded' >
        <button type="submit">Submit</button>
        </Link>
       
        </>

  
)
}