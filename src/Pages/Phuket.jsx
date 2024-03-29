import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Phuket/phuketfull.png"
import Carausel1 from "../Assets/Phuket/phuket1.webp"
import Carausel2 from "../Assets/Phuket/phuket2.jpg"
import Carausel3 from "../Assets/Phuket/phuket3.jpg"

const Phuket = () => {
    return (
        <ProjectPage
        project="PHUKET HEALTH & WELLNESS RESORT"
            image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/Phuket/phuketfull.png"
            description="Phuket Health & Wellness Resort includes Luxury Villas, Apartments & Studios.
            Feel the luxury in this uniquely designed project."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="Facilities in the “Phuket” project:"
            li1="Communal Swimming Pool"
           


        />
    )
}

export default Phuket