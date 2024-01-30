import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../Styles/ContactUs.scss"


const Contact = () => {
    return (
        <>
            <Header></Header>
            <h1 className='contactus-header'>You can contact us anytime.</h1>
            <div className="contactus-container">
                <div className="contactus-element">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <h4>By Phone</h4>
                    <h5>0530 041 01 01</h5>
                </div>
                <div className="contactus-element">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <h4>By Mail</h4>
                    <h5>kmrealestates@hotmail.com
                    </h5>
                </div>
                <div className="contactus-element">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <h4>By Social Media</h4>
                    <h5> <a href="https://www.instagram.com/km_real_estates/
" target='_blank'>Instagram</a></h5>
                </div>

            </div>
            <Footer></Footer></>
    )
}

export default Contact