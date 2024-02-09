import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import "../Styles/ProjectsPage.scss"
import Phone from "../Assets/phone.svg"
import Property from "../Assets/property-svg.svg"
import Footer from "./Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const ProjectPage = (props) => {
    return (
        <>
            <Header></Header>
            <div className='projectpage-container'>
                <div className="project-hero">
                    <h1>{props.project}</h1>
                    <img src={props.image} alt="Project Image" />
                </div>
                <div className="projectpage-wrap">
                    <div className="projectpage-left">
                        <h2>Description</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="projectpage-right">
                        <h2>Before Construction Images</h2>
                        <Carousel fade>
                            <Carousel.Item>
                                <img src={props.carousel1} alt="" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={props.carousel2} alt="" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={props.carousel3} alt="" />

                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>

               {props.explenation ?  <div className="facilities-services">
                    <div className="facilities">
                        <h2>AMENITIES & FACILITIES</h2>
                        <p>{props.explenation}</p>
                        <ul>
                            <li>{props.li1}</li>
                            {props.li2 ? <li>{props.li2}</li> : ""}
                            {props.li3 ? <li>{props.li3}</li> : ""}
                            {props.li4 ? <li>{props.li4}</li> : ""}
                            {props.li5 ? <li>{props.li5}</li> : ""}
                            {props.li6 ? <li>{props.li6}</li> : ""}
                            {props.li7 ? <li>{props.li7}</li> : ""}
                            {props.li8 ? <li>{props.li8}</li> : ""}
                            {props.li9 ? <li>{props.li9}</li> : ""}
                            {props.li10 ? <li>{props.li10}</li> : ""}
                            {props.li11 ? <li>{props.li11}</li> : ""}
                        </ul>
                    </div>
                    {props.services? <div className="services">
                        <h2>SERVICES</h2>
                        <p>{props.services}</p>
                    </div> : ""}

                </div> : ""} 
              
                <div className="contact">
                    <div className="contact-wrap">
                        <div className="contact-left">
                            <img src={Phone} alt="-" />
                        </div>
                        <div className="contact-right">
                            <h2>Contact us</h2>
                            <p>You can contact us anytime via;</p>
                            <div className="contact-wrap">
                                <div className="contact-element">  <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+905338763495">0530 041 01 01</a></div>
                                <div className="contact-element">  <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:kmrealestates@hotmail.com">kmrealestates@hotmail.com</a></div>
                                <div className="contact-element">  <FontAwesomeIcon icon={faInstagram} />
                                    <a href="https://www.instagram.com/km_real_estates/" target='_blank'>K & M Real Esatates</a></div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default ProjectPage