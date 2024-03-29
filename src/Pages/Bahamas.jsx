import React from "react";
import ProjectPage from "../Components/ProjectPage";
import HeroImg from "../Assets/Bahamas/bahamasheroimg.png";
import Carausel1 from "../Assets/Bahamas/bahamas-3Ds-13.jpg";
import Carausel2 from "../Assets/Bahamas/bahamas-3Ds-6.jpg";
import Carausel3 from "../Assets/Bahamas/bahamas-3Ds-7.jpg";

const Bahamas = () => {
  return (
    <ProjectPage
      project="Bahamas Homes"
      image="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/kmestates/Bahamas/bahamasheroimg.png"
      description="Situated on the east of Kyrenia, Bahamas Homes, brings the Bahamas to you. With it’s modern and unique design, variety of types and all the amenities it has to offer Bahamas Homes is surely an eye-catcher.

    Aimed to be completed in three phases the project offers a total of 701 units. Comprised of 113 units, Phase I, includes A, B and C type apartments and the breathtaking Beach and Sea Villas located just in front of the sea. Phase II, on the other hand, is comprised of 284 units and include both A and B type apartments. Phase III, the newest addition to Bahamas Homes, consists of 304 units and includes type A and B apartments.
    
    This exotic site has an unobstructed north facing view towards the blue of Mediterranean Sea and a south facing panaromic view of the Five Finger Mountains. With all the amenities on-site this one-of-a-kind project is simply a taste of paradise."
      carousel1={Carausel1}
      carousel2={Carausel2}
      carousel3={Carausel3}
      explenation="Bahamas Homes offers a wide range of amenities for you to take advantage of. Everything you need is simply within your reach:"
      li1="Restaurants"
      li2="Outdoor Cinema"
      li3="Kids Playground"
      li4="Indoor Heated Pool"
      li5="Wellness Center"
      li6="Sauna"
      li7="Hamam (Turkish Bath)"
      li8="Mini Market"
      li9="Cafe"
      li10="Exchange Shop"
      li11="Pharmacy & First Aid"
      services="Bahamas Homes offers a wide range of services for its homeowners or rental guests. These include but are not limited to: concierge services, rental services, shuttle services, laundry services, house keeping and beauty center.

            Furthermore, pre-sale and after-sale services will also be provided to the residents of Bahamas Homes. Any needs or requirements in property related matters will be dealt by our 24/7 services."
    />
  );
};

export default Bahamas;
