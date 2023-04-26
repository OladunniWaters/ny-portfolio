import "./Hero.scss";
import { MdWavingHand } from 'react-icons/md';
import { FaSmileWink } from 'react-icons/fa';



function Hero() {

  return (
<div className=''>  
    <div className="container">
        <div className='hero-row'>
              <div className='h-cont'>
                 <h1  className='hero-h1'>Front-END</h1>
                
              </div>
                 
              
                 <div className='p_cont'>
                    <p className='hero-p'> Hello <MdWavingHand  />, I am Oladunni Waters, a frontend developer who is passionate about creating interactive and scalable frontend products that deliver exceptional user experiences. Thank you for visiting, and I hope you find something that interests you.<FaSmileWink />
                    </p>
                    <h1 className='hero-h1-1'>DEV</h1>
                </div>
        </div>
      </div>  
    </div>
  );
}
export default Hero;


