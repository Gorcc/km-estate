import React from 'react'
import Logo from "../Assets/kmlogo.png"
import "../Styles/Footer.scss"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-left">
            <h4>K / M Investment </h4>
        </div>
        <div className="footer-right">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </div>
        <div className="footer-middle">
           <h5>K/M Investment All Right Reserved ©</h5>
        </div>
     
    </div>
  )
}

export default Footer