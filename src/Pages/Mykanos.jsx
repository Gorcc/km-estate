import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Mykanos/mykanosfull.png"
import Carausel1 from "../Assets/Mykanos/mykanos1.jpg"
import Carausel2 from "../Assets/Mykanos/mykanos2.jpg"
import Carausel3 from "../Assets/Mykanos/mykanos3.jpg"


const Mykanos = () => {
    return (
        <ProjectPage
            project="MYKONOS HOMES"
            image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/Mykanos/mykanosfull.png"
            description="Mykonos Homes is a unique new luxury project from Cyprus Constructions. The site is located next to our Maldives Homes project in Esentepe, which is one of the most popular villages and is surrounded by the numerous amenities . The concept design of Mykonos Homes was inpsired by the famous Cavo Tagoo Hotel in Greece.

            Mykonos Homes is comprised of 8 blocks of two-storey apartments, which include 1+1, 2+1, 3+1 ground floor luxury apartments and penthouses. Moreover, there are 8 villas located on the front line.
            
             "
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="Mykonos Homes consists of 8 villas (3+1) and 72 apartments (1+1, 2+1 and 3+1). The general features and materials used throughout the development are as follow:"
            li1="Heat & sound insulation"
            li2="Energy saving bricks"
            li3="Modern kitchen units with the soft close systems & granite worktops"
            li4="Ideal Standard fitted sanitary ware"
            li5="Worldwide known bathroom and kitchen"
            li6="appliances (taps and showers)"
            li7="Choice of oversized porcelain flooring in kitchens/batrooms"
            li8="5-year building guarantee"
            li9="Private swimming pool on the terrace for: blocks A1, A2, C block penthouse apartments and villas 6, 7 & 8. Shared lake swimming pool for villas 1, 2, 3, 4 & 5."
            li10="Central heating infrastructure for heat heat pump sytems (for blocks A1, A2, B1 & B2)"
            li11="Luxury en suite wet-room shower & bathrooms"

            services="Mykonos Homes offers a wide range of amenities for you to take advantage of. The site itself offers a Pool bar and a Heart shaped heated communal pool. Furthermore, as an extension of its neighbour project, residents will have access to the amenities of Maldives Homes:"
        />
    )
}

export default Mykanos