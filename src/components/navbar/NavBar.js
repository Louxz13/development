import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {

    const  [isMobile, setIsMobile] = useState(false);
  return ( // prueba
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className={isMobile? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}
        >
            <Link to="/homeform" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/calendaryform" className='calendary'>
                <li>Calendar</li>
            </Link>
            <Link to="/contactform" className='contact'>
                <li>Contact</li>
            </Link>
            <Link to="/aboutform" className='about'>
                <li>About</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ? (
                <i className='fas fa-times'></i> 
            ) : (
                <i className='fas fa-bars'></i>
            )}
        </button>
    </nav>
  )
}

export default NavBar