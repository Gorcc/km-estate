
import Hero from "../Components/Hero"
import LearnMore from '../Components/LearnMore';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';


function Homepage() {
  return (
    <div className="App">
      
      <Hero></Hero>
      <LearnMore></LearnMore>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
