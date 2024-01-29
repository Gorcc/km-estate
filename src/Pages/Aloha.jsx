import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Aloha/alohafull.png"
import Carausel1 from "../Assets/Aloha/aloha1.jpg"
import Carausel2 from "../Assets/Aloha/aloha2.jpg"
import Carausel3 from "../Assets/Aloha/aloha3.jpg"

const Aloha = () => {
    return (
        <ProjectPage
        project="ALOHA BEACH RESORT"
            image={HeroImg}
            description="The complex is located on 80 hectares of land in the picturesque area of ​​TATLISU on the first coastline.
            800 meters away is the HAWAII HOMES complex, and 6.5 km, on the other hand, the BAHAMAS HOMES complex, access to which is free for residents of Aloha Beach resort.
            The concept of the project is READY TO MOVE. The price includes furniture and household appliances. Modern kitchen and bathrooms. Central air conditioning system. Card entry system.
            There are 2 Phases in Aloha Beach Resort. Phase I includes  5+1 and 3+1 luxury villas, Type A 1+1 apartments, and Type B 1+1 Apartments. Phase II includes Type V 2 & 3 bedroom bungalows, Type A 1+1 apartments, Type B 1+1 garden apartments and 2+1 lotf penthouses."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="Infrastructure in the “ALOHA” project:"
            li1="Spa"
            li2="Gym"
            li3="ReceptIon"
            li4="Restaurant"
            li5="Tennis court"
            li6="Beach"
            li7="Laundry"
            li8="House-keepIng"
            li9="Beach cinema"
            li10="Swimming pools with water and light show"
            li11="Cross-site service (8 complexes of Cyprus Constructions in ESENTEPE)"


        />
    )
}

export default Aloha