import './Home.scss';
import Hero from './Hero';
import Skill from './Skill';
import Work from './Work';
import Contact from './Contact';



function Home() {

  return (
    <div className='home'>
      <Hero />
      <Skill />
      <Work /> 
      <Contact />
    </div>
  );
}
export default Home


