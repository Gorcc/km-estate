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

const Projects = () => {
    return (
        <>

            <div className='projects-container'>
                <h1 className='project-header'>Projects</h1>
                <div className="project-wrap">
                    <div className="project">
                        <a href="/bahamas">
                            <img src={BahamasLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={MykonosLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={HawaiiLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={MoonLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={AlohaLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={PhuketLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={MaldiveLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={IDYLL} alt="Bahamas Logo" />

                        </a>
                    </div>
                    <div className="project">
                        <a href="#">
                            <img src={PearlLogo} alt="Bahamas Logo" />

                        </a>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects