import React from "react";
import ProjectPage from "../Components/ProjectPage";
import HeroImg from "../Assets/land.jpg";
import Carausel1 from "../Assets/landimg1.jfif";


const Land = () => {
  return (
    <ProjectPage
    project="BUY LAND IN NORTH CYPRUS!"
    image={HeroImg}
    description={(
      <div>
        Discover your dream property in Cyprus with our expert assistance by your side.<br/>
        2360 m<sup>2</sup><br/>
        Zoned for construction<br/>
        • Section 96 (220% construction permitted)<br/>
        • 5192 m<sup>2</sup> building capacity<br/>
        • No floor limit<br/>
        • Adjacent to main road
      </div>
    )}
    carousel1={Carausel1}
    carousel2={Carausel1}
    carousel3={Carausel1}
  />
  );
};

export default Land;
