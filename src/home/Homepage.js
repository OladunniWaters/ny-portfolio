import "./Homepage.scss";
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="Homepage">
       <Hero />
       <Skills />       
       <Portfolio />
       <AboutMe />
       <ContactMe />
       <Footer />
    </div>
  );
}
export default Homepage;


