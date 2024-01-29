import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Maldives/maldives1.jpg"
import Carausel1 from "../Assets/Maldives/maldives1.jpg"
import Carausel2 from "../Assets/Maldives/maldives2.jpg"
import Carausel3 from "../Assets/Maldives/maldives3.jpg"


const Moonlight = () => {
    return (
        <ProjectPage
        project="MALDIVES HOMES"
            image={HeroImg}
            description="Maldives Homes are comprised of uniquely built villas and luxury apartments. Reknown as the most popular village, Esentepe is surrounded with numerous amenities, making the area a rising star for property investment in Northern Cyprus.

            The exotic Maldives villas and apartments have an unobstructed north facing view towards the Mediterranean Sea, with panoramic views of both the Five Finger Mountains and the Mediterranean Sea. The site is only 20mt to the sea: with a magnificent lagoon to be used as your own private beach.
            
            Maldives Homes Project includes Type A apartments, Type B Apartments, Villas with Shared Pool, and Villas with Individual Pool."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="There are total of 55 properties in Maldives Homes. 10 of these are villas (2+1 and 3+1) and the rest are apartments (1+1, 2+1 and 3+1). The general features and materials used throughout the development are as follow:"
            li1="Heat & sound insulation"
            li2="Energy saving bricks"
            li3="Double glazed windows"
            li4="Cold Proof Black Frame Aluminium"
            li5="Modern high gloss kitchen units with the soft close systems & granite worktops"
            li6="Ideal standard fitted sanitary ware
            "
            li7="Worldwide known bathroom & kitchen appliances"
            li8="Choice of oversized porcelain flooring in kitchens/bathrooms"
            li9="5 Year Building Guarantee"
            li10="Landscaped gardens: fully designed & planted"
            li11="Full air conditioning"
            services="Maldives Homes offers a wide range of amenities for you to take advantage of. Everything you need is simply within your reach."


        />
    )
}

export default Moonlight