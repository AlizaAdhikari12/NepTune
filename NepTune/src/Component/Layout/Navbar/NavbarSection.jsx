import { Container } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const NavbarSection=()=>{
    return(
        <>
        <div className="logo_container">
            <div className="logo">
            <p className="logo_title">NepTune</p>
            </div>
           <div className="nav-list">
            <Link to="#" className="List-Browse">Browse</Link>
           <div className="library">
           <p>Library</p>
           <ul className="songs_option">
                <li>Songs</li>
                <li>Albums</li>
                <li>Artists</li>
                <li>Radio</li>
            </ul>
           </div>
         
           
            <p>My music</p>
            <ul>
                <li>Recently Played</li>
                <li>Favorite Songs</li>
                <li>Local File</li>
            </ul>
           </div>
        </div>
              
        </>    )
}