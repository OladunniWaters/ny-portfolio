import './Home.scss';
import Hero from './Hero';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';



function Home() {

  return (
    <div className='home'>
      <Hero />
      <Skills className='section'/>
      <Work className='section'/>
      <Contact className='section'/>
    </div>
  );
}
export default Home


