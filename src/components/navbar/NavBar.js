import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return ( // prueba
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className='nav-links'>
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
    </nav>
  )
}

export default NavBar