import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import "../Styles/ProjectsPage.scss"
const ProjectPage = (props) => {
    return (
        <>
        <Header></Header>
        <div className='projectpage-container'>
            <div className="project-hero">
                <h1>{props.project}</h1>
                <img src={props.image} alt="Project Image" />
            </div>
            <div className="projectpage-wrap">
            <div className="projectpage-left">
                <h2>Description</h2>
                <p>{props.description}</p>
            </div>
            <div className="projectpage-right">
                <h2>Before Construction Images</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={props.carousel1} alt="" />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={props.carousel2} alt="" />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={props.carousel3} alt="" />
                        
                    </Carousel.Item>
                </Carousel>

            </div>
            </div>
           
        </div>
        </>
    )
}

export default ProjectPage