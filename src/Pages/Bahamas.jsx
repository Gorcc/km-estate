import React from 'react'
import ProjectPage from '../Components/ProjectPage'
import HeroImg from "../Assets/Bahamas/bahamasheroimg.png"
import Carausel1 from "../Assets/Bahamas/bahamas-3Ds-13.jpg"
import Carausel2 from "../Assets/Bahamas/bahamas-3Ds-6.jpg"
import Carausel3 from "../Assets/Bahamas/bahamas-3Ds-7.jpg"

const Bahamas = () => {
    return (
        <ProjectPage
        project="Bahamas Homes"
            image={HeroImg}
            description="Situated on the east of Kyrenia, Bahamas Homes, brings the Bahamas to you. With it’s modern and unique design, variety of types and all the amenities it has to offer Bahamas Homes is surely an eye-catcher.

    Aimed to be completed in three phases the project offers a total of 701 units. Comprised of 113 units, Phase I, includes A, B and C type apartments and the breathtaking Beach and Sea Villas located just in front of the sea. Phase II, on the other hand, is comprised of 284 units and include both A and B type apartments. Phase III, the newest addition to Bahamas Homes, consists of 304 units and includes type A and B apartments.
    
    This exotic site has an unobstructed north facing view towards the blue of Mediterranean Sea and a south facing panaromic view of the Five Finger Mountains. With all the amenities on-site this one-of-a-kind project is simply a taste of paradise."
            carousel1={Carausel1}
            carousel2={Carausel2}
            carousel3={Carausel3}
        />
    )
}

export default Bahamas