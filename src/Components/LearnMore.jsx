import React from 'react'
import "../Styles/LearnMore.scss"
import KadirImg from "../Assets/KadirFullImg.png"
const LearnMore = () => {
    return (
        <div className='learnmore-container' id='about-us'>

            <div className="learnmore-left">
                <img src={KadirImg} alt="" />
            </div>
            <div className="learnmore-right">
                <h1>About us</h1>
                <p>This page should focus on the law firm or the lawyer's background. As with the usual About Us pages, you can talk about the history, track record, or even the guiding principles of the firm/lawyer.

                    This page should focus on the law firm or the lawyer's background. As with the usual About Us pages, you can talk about the history, track record, or even the guiding principles of the firm/lawyer.</p>
                <a href="" className='learnmore-btn'>Projects</a>
                <a href="" className='learnmore-btn'>Contact Us</a>
            </div>
        </div>
    )
}

export default LearnMore