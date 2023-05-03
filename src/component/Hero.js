import "./Hero.scss";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Hero() {
     useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
 
  

  return (
<div className=''>  
    <div className="container">
        <div className='hero-row'>
              <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="500" className='h-cont'>
                 <h1 className='hero-h1'>Front-END</h1>
                
              </div>
                 
              
                 <div className='p_cont'>
                   <div data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="1500">
                      <p className='hero-p'> Hello, I'm Oladunni Waters, a frontend developer who is passionate about creating interactive and scalable frontend products that deliver exceptional user experiences. Thank you for visiting, and I hope you find something that interests you.
                      </p>
                      </div>
                    <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="1000">
                      <h1 className='hero-h1-1 noisy'>DEV</h1>
                   </div>
                </div>
        </div>
      </div>  
    </div>
  );
}
export default Hero;


