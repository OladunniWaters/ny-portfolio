import "./Skill.scss";
import { BiCubeAlt } from 'react-icons/bi';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Skills() {
      useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  
  return (
    <div className="skills">
       <h1 className='skill-h1'>SKILLS</h1>    
       <div className='skill-cont'>
          <div data-aos="fade-up" data-aos-offset="400" data-aos-duration="1000" className='list-cont'>
             <p className='skill'><BiCubeAlt className='cube'/>HTML</p>
             <p className='skill'><BiCubeAlt className='cube'/>CSS</p>
             <p className='skill'><BiCubeAlt className='cube'/>Javascript</p>
           </div>
           
          <div data-aos="fade-up" data-aos-offset="400" data-aos-duration="1000" data-aos-delay="500" className='list-cont'>
             <p className='skill'><BiCubeAlt className='cube'/>React.js</p>
             <p className='skill'><BiCubeAlt className='cube'/>SASS/SCSS</p>
             <p className='skill'><BiCubeAlt className='cube'/>Tailwind</p>
           </div>
           
            <div data-aos="fade-up" data-aos-offset="400" data-aos-duration="1000" data-aos-delay="1000" className='list-cont'>
             <p className='skill' ><BiCubeAlt className='cube'/>Redux</p>
             <p className='skill'><BiCubeAlt className='cube'/>MUI</p>
             <p className='skill'><BiCubeAlt className='cube'/>GIT</p>
           </div>
       </div>
    </div>   
  );
}
export default Skills;
