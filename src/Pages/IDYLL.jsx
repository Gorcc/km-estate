import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/IDYLL/idyllfull.png"
import Carausel1 from "../Assets/IDYLL/idyll1.jpg"
import Carausel2 from "../Assets/IDYLL/idyll2.jpg"
import Carausel3 from "../Assets/IDYLL/idyll3.jpg"


const IDYLL = () => {
    return (
        <ProjectPage
        project="IDYLL HOMES"
            image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/IDYLL/idyllfull.png"
            description="Idyll Homes is an affordable luxury project in Esentepe. Reknown as the most popular village, the numerous amenities surrounding Esentepe makes any property investment in the area is well worth it.

            Idyll is comprised of a communal pool and 7 blocks of two-storey apartments, which include 1+1 and 2+1 ground floor apartments/penthouses. With its marvelous mountain view and close range to the sea Idyll Homes is the perfect place for those seeking a peaceful yet luxury life style."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
            explenation="Idyll Homes consists of 7 blocks of two-storey apartments (1+1 and 2+1). The standard specifications included in basic build are as follow:"
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

export default IDYLL