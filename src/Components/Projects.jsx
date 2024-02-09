import React from 'react'
import "../Styles/Projects.scss"
import BahamasLogo from "../Assets/BAHAMASLOGO-01.png"
import MykonosLogo from "../Assets/1.Mykonos Homes.jpeg"
import HawaiiLogo from "../Assets/hawaiilogo.png"
import MoonLogo from "../Assets/MOONLIGHT VILLAS.jpeg"
import AlohaLogo from "../Assets/alohalogo.png"
import PhuketLogo from "../Assets/Copy of Phuket_Logo_White_gBG.png"
import MaldiveLogo from "../Assets/1.Maldives Homes.jpeg"
import IDYLL from "../Assets/IDYLL Homes LOGO.jpeg"
import PearlLogo from "../Assets/1.Pearl Island Homes.jpeg"
import LandLogo from "../Assets/Palm Beach.svg"
import Footer from './Footer'

const Projects = () => {
    return (
        <>

            <div className='projects-container' id='projects'>
                <h1 className='project-header'>Projects</h1>
                <div className="project-wrap">
                    <div className="project">
                        <a href="/bahamas">
                            <img src={BahamasLogo} alt="Bahamas Logo" />
                            <h5>Bahamas Homes</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/mykanos">
                            <img src={MykonosLogo} alt="Mykonos Logo" />
                            <h5>Mykanos Homes</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/hawaii">
                            <img src={HawaiiLogo} alt="Bahamas Logo" />
                            <h5>Hawaii Homes</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/moonlight">
                            <img src={MoonLogo} alt="Bahamas Logo" />
                            <h5>Moonlight Villas</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/aloha">
                            <img src={AlohaLogo} alt="Bahamas Logo" />
                            <h5>Aloha Resort</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/phuket">
                            <img src={PhuketLogo} alt="Bahamas Logo" />
                            <h5>Phuket Resort</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/maldives">
                            <img src={MaldiveLogo} alt="Bahamas Logo" />
                            <h5>Maldives Homes</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/idyll">
                            <img src={IDYLL} alt="Bahamas Logo" />
                            <h5>IDYLL Homes</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/pearl">
                            <img src={PearlLogo} alt="Bahamas Logo" />
                            <h5>Pearl Island</h5>
                        </a>
                    </div>
                    <div className="project">
                        <a href="/land">
                            <img src={LandLogo} alt="Land Logo" />
                            <h5>Land for Sale</h5>
                        </a>
                    </div>
                </div>


            </div>
            
        </>
    )
}

export default Projects