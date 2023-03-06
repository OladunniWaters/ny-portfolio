import "./Homepage.scss";
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
//import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="Homepage">
       <Hero />
       <Skills />       
       <Portfolio />
    </div>
  );
}
export default Homepage;


