import React from 'react'
import "../Styles/Hero.scss"
import Logo from "../Assets/kmlogo.png"
import HeroImg from "../Assets/melimg.png"

const Hero = () => {
    return (
        <div className='hero-container'>

            <div className="hero-left">
                <img src={Logo} alt="Logo"  />
                <h1>Guiding You Through North Cyprus Real Estate with Personalized Expertise</h1>
                <p>We specialize in North Cyprus Gems, Get the best deal in a great investment journey. </p>
                <a href="#" className='hero-btn'>Learn More</a>
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero