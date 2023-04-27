import './Home.scss';
import Hero from './Hero';
import Skill from './Skill';
import Work from './Work';
import Contact from './Contact';



function Home() {

  return (
    <div className='home'>
      <Hero />
      <Skill className='section'/>
      <Work className='section'/>
      <Contact className='section'/>
    </div>
  );
}
export default Home


