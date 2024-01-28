import React from 'react'
import Logo from "../Assets/kmlogo.png"
import "../Styles/Header.scss"


const Header = () => {
  return (
    <div className='header-container'>
        <img src={Logo} alt="Logo"  />
        <ul>
            <li>
                <a href="/">HOME</a>
                <a href="/">CONTACT US</a>
                <a href="/">ABOUT US</a>
            </li>
        </ul>
    </div>
  )
}

export default Header