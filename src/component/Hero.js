import "./Hero.scss";
import { BsArrowDown } from 'react-icons/bs';




function Hero() {

  return (
<div className=''>  
    <div className="container">
        <div className='hero-row'>
                 <h1 
                     className='hero-h1'>Frontend Developer.
                 </h1>
                 <div className='p_cont'>
                    <p className='hero-p'> I like to craft solid and scalable frontend products with great user experience.
                    I like to craft solid and scalable frontend products with great user experience.
                    </p>
                   <p className='hero_empty'><BsArrowDown className='arrow_down'/></p>
                </div>
        </div>
      </div>  
    </div>
  );
}
export default Hero;


