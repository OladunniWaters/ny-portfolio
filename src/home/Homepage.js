import "./Homepage.scss";
import Hero from '../component/Hero';
import Work from '../component/Work';
import Skill from '../component/Skill';
import Contact from '../component/Contact';

function Homepage() {
  return (
    <div className="Homepage">
       <Hero />
       <Skill />       
       <Work />
       <Contact />
    </div>
  );
}
export default Homepage;


