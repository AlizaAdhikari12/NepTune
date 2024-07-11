import React from 'react'
import './DisplayPage.css'
import { Link } from 'react-router-dom'
export const DisplayPage = ()=>{
return(
    <>
    <div className="body">
        <div className="Logo">
        <div className="Data">
            <span className="title">NepTune</span>
            <span className="slogan">Where melody meets magic</span>
           <Link to="/App">
           <button className='Start'
             type="button">
             Get Started
            </button></Link>
            
        </div>
    </div>
    </div>
    </>
)
}
