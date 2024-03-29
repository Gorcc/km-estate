import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Hawaii/hawaiifull.png"
import Carausel1 from "../Assets/Hawaii/hawaii1.jpg"
import Carausel2 from "../Assets/Hawaii/hawaii2.jpg"
import Carausel3 from "../Assets/Hawaii/hawaii3.jpg"


const Bahamas = () => {
    return (
        <ProjectPage
        project="Hawaii Homes"
            image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/Hawaii/hawaiifull.png"
            description="Hawaii homes is cyprus constructions biggest sea side residential project with studios, 1+1, 2+1 loft penthouses, and 3 bedroom luxury villas having a total unit count of 500. Situated on the coast of tatlisu the project features artificial rivers, lakes, and islands spread across the site with the addition of our famous garden designs. Facilities on site are indoor heated pool, spa center, restaurant, bar, gym, basketball and tennis court. The project is set to complete end of 2025.

            There are 3 property type in Hawaii Homes. Type A 1+1 and 2+1 apartments, Type B studios, and Type C villas."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="HAWAII HOMES consists of 22 blocks of two-storey studio apartments, 8 blocks of 1+1, and 2+1 loft penthouses and 10 luxury villas. The standard specifications included in basic build are as follow:"
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
           
        />
    )
}

export default Bahamas