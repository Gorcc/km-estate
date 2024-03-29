import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Pearl/pearlfull.png"
import Carausel1 from "../Assets/Pearl/pearl1.jpg"
import Carausel2 from "../Assets/Pearl/pearl2.jpg"
import Carausel3 from "../Assets/Pearl/pearl3.jpg"


const Pearl = () => {
    return (
        <ProjectPage
        project="PEARL ISLAND"
            image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/Pearl/pearlfull.png"
            description="Pearl Island consist of 156 studio apartments: ground floor studio apartments have 35m2 gross area, 8m2 garden terrace and studio apartments on the first floor with 35m2 gross area, 8m2 terrace and 35m2 roof terrace.

            There is a communal swimming pool with salt water treatment system on the site and children swimming pool."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="The standard specifications included in basic build in Pearl Island are as follow:"
            li1="Damp proof course"
            li2="Construction concrete"
            li3="Climate and Water Insulation Roofing"
            li4="Interior Flooring – Ceramic (Choice of colours)"
            li5="Exterior Flooring – Non-Slip"
            li6="Fitted kitchen (Choice of colours)"
            li7="Fitted wardrobes in all bedrooms with respect to dimensions in plan (Choice of colours)"
            li8="Double glazed windows"
            li9="Interior Doors"
            li10="Exterior Doors and windows"
            li11="Main Entrance Door (Wood)"
            services="The kitchen features four electrical points, a selection of worktop colors, a stainless steel sink, laminate base units in accordance with the floor plans, and ceramic wall tiling above the base units. In the living room, there are three electrical points, one telephone point, and one TV point. Bedroom 1 and Bedroom 2 each include two electrical points, one telephone point, and built-in fitted wardrobes extending from floor to ceiling as per the floor plan. The bathroom is equipped with a toilet unit, a shower/bath, ceramic wall tiles, non-slip ceramic flooring, and one sink. The package also encompasses essential items such as plumbing infrastructure, a water heating system, painted internal walls, internal and external doors with locks and handles, and a sewage system—all included in the overall price."
           
        />    )
}

export default Pearl