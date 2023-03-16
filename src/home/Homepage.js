import "./Homepage.scss";
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/ContactMe';

function Homepage() {
  return (
    <div data-aos="fade-up" 
         data-aos-duration="3000"
         className="Homepage">
       <Hero />
       <Skills />       
       <Portfolio />
       <Contact />
    </div>
  );
}
export default Homepage;


