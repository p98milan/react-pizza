import React from 'react';
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-right">
             <Link to='/'><a href="/">Kezdőoldal</a> </Link>
             <Link to='/pizza'><a href="/pizza">Pizzák</a> </Link>
             <Link to='/about'> <a href="/about">Rólunk</a> </Link>
             <Link to='/contact'><a href="/contact">Kapcsolat</a></Link>

             <button>
                <GiHamburgerMenu/>
             </button>
        </div>
        
    </div>
  )
}

export default Navbar;