import React from 'react';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialIcons'>
            <FaFacebookSquare/><FaInstagram/><FaTwitter/><FaLinkedin/>
        </div>
        <p>2023 &copy; Front-end/Full-stack fejlesztő tanfolyam - React modul</p>

    </div>
  )
}

export default Footer;