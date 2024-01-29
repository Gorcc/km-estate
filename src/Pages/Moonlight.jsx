import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Moon/moonfull.png"
import Carausel1 from "../Assets/Moon/moon1.jpg"
import Carausel2 from "../Assets/Moon/moon2.jpg"
import Carausel3 from "../Assets/Moon/moon3.jpg"


const Moonlight = () => {
    return (
        <ProjectPage
        project="MOONLIGHT VILLAS"
            image={HeroImg}
            description="Moonlight Villas are 6 high quality and smart villas on the esentepe coast. 3 bedroom and 3 bathroom duplex villas with direct sea view and private pool. Made to be the perfect holiday home while still being a great investment oppurtunity. Each villa has its own outdoor cinema, water fall and sunken terrace in the pool with fire pit. Moonlight villas are located very close to our Idyll Homes project and esentepe municipality beach."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="Moonlight villas consists of 6 luxury sea front villas. The standard specifications included in basic build are as follow:"
            li1="Damp proof course"
            li2="Construction concrete"
            li3="Climate and Water Insulation Roofing"
            li4="Interior Flooring – Ceramic (Choice of colours)"
            li5="Exterior Flooring – Non-Slip"
            li6="Fitted kitchen (Choice of colours)
            "
            li7="Fitted wardrobes in all bedrooms with respect to dimensions in plan (Choice of colours)"
            li8="Double glazed windows"
            li9="Interior Doors"
            li10="Exterior Doors and windows"
            li11="Five years structural guarantee"
            services="The kitchen features four electrical points, a selection of worktop colors, a stainless steel sink, laminate base units in accordance with the floor plans, and ceramic wall tiling above the base units. In the living room, there are three electrical points, one telephone point, and one TV point. Bedroom 1 and Bedroom 2 each include two electrical points, one telephone point, and built-in fitted wardrobes extending from floor to ceiling as per the floor plan. The bathroom is equipped with a toilet unit, a shower/bath, ceramic wall tiles, non-slip ceramic flooring, and one sink. The package also encompasses essential items such as plumbing infrastructure, a water heating system, painted internal walls, internal and external doors with locks and handles, and a sewage system—all included in the overall price."


        />
    )
}

export default Moonlight