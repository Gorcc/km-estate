import React from 'react'
import "../Styles/LearnMore.scss"
import KadirImg from "../Assets/KadirFullImg.png"
const LearnMore = () => {
    return (
        <div className='learnmore-container' id='about-us'>

            <div className="learnmore-left">
                <img src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/KadirFullImg.png" alt="" />
                <h5>Kadir Çetin</h5>
            </div>
            <div className="learnmore-right">
                <h1>About us</h1>
                <p>Our small real estate company offers great opportunities for you. Possibility of paying construction companies without bank credit. Rapid increase in value. Rental service provided by the construction company on your behalf. Opportunity to trade with cryptocurrency. Additionally, benefit from short amortization periods. Explore more about our projects and offerings by checking our portfolio.</p>
                <a href="#projects" className='learnmore-btn'>Projects</a>
                <a href="/contact" className='learnmore-btn'>Contact Us</a>
            </div>
        </div>
    )
}

export default LearnMore