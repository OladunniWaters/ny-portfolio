import  './Portfolio.scss';

import { BsArrowUpRight } from 'react-icons/bs';

import { FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { TiHtml5 } from 'react-icons/ti';


import PortfolioImage1 from '../assets/Tube_Short_Stack_x5__R Shadowless.png'
import PortfolioImage2 from '../assets/Sphere_Low_Poly_3__R Shadowless.png'
import PortfolioImage3 from '../assets/Tube_Medium_Laying_4__L Shadowless.png'
import PortfolioImage4 from '../assets/Tube_Long_Laying_3__L Shadowless.png'

function Portfolio() {
  
  return (
    
    
    <div className='Portfolio'>
            <h2 className='portfolio-h2'>WORKS</h2>
            
            <div className='portfolio-card'>
                <div className='PortfolioImage-cont'>
                    <img src={PortfolioImage1} alt='3d shapes' className='PortfolioImage'/>
                </div>
                <div className='portfolio-card-body'>
                    <div className='card-text-cont'>
                        <h3 className='portfolio-h3'>MOVIE APP</h3>
                        <BsArrowUpRight className='arrow-icon'/>
                    </div>  
                     <p className='portfolio-p'>In 2 years of flextime work at CRAFT-Education. I improved the learning environment for their students and digitalised many of their business processes.</p>
                     <div className='card-button-cont'>
                         <FaReact className='work-icon'/>
                         <IoLogoCss3 className='work-icon'/>
                         <IoLogoJavascript  className='work-icon'/>
                         <TiHtml5  className='work-icon'/>
                         <FaGitAlt  className='work-icon'/>
                     </div>    
                </div>
           </div>   
           
           
             <div className='portfolio-card2'>
                <div className='PortfolioImage-cont2'>
                    <img src={PortfolioImage2} alt='3d shapes' className='PortfolioImage2'/>
                </div>
                <div className='portfolio-card-body2'>
                    <div className='card-text-cont2'>
                        <h3 className='portfolio-h32'>MOVIE APP</h3>
                        <BsArrowUpRight className='arrow-icon2'/>
                    </div>  
                     <p className='portfolio-p2'>In 2 years of flextime work at CRAFT-Education. I improved the learning environment for their students and digitalised many of their business processes.</p>
                     <div className='card-button-cont2'>
                         <FaReact className='work-icon'/>
                         <IoLogoCss3 className='work-icon'/>
                         <IoLogoJavascript className='work-icon'/>
                         <TiHtml5 className='work-icon'/>
                         <FaGitAlt className='work-icon'/>
                     </div>    
                </div>
           </div>  
           
           
           <div className='portfolio-card'>
                <div  className='PortfolioImage-cont'>
                    <img src={PortfolioImage3} alt='3d shapes' className='PortfolioImage'/>
                </div>
                <div className='portfolio-card-body'>
                    <div className='card-text-cont'>
                        <h3 className='portfolio-h3'>MOVIE APP</h3>
                        <BsArrowUpRight className='arrow-icon'/>
                    </div>  
                     <p className='portfolio-p'>In 2 years of flextime work at CRAFT-Education. I improved the learning environment for their students and digitalised many of their business processes.</p>
                     <div className='card-button-cont'>
                         <FaReact className='work-icon'/>
                         <IoLogoCss3 className='work-icon'/>
                         <IoLogoJavascript className='work-icon'/>
                         <TiHtml5 className='work-icon'/>
                         <FaGitAlt className='work-icon'/>
                     </div>    
                </div>
           </div>  
           
           
            <div className='portfolio-card2'>
                <div className='PortfolioImage-cont2'>
                    <img src={PortfolioImage4} alt='3d shapes' className='PortfolioImage2'/>
                </div>
                <div className='portfolio-card-body2'>
                    <div className='card-text-cont2'>
                        <h3 className='portfolio-h32'>MOVIE APP</h3>
                        <BsArrowUpRight className='arrow-icon2'/>
                    </div>  
                     <p className='portfolio-p2'>In 2 years of flextime work at CRAFT-Education. I improved the learning environment for their students and digitalised many of their business processes.</p>
                     <div className='card-button-cont2'>
                         <FaReact className='work-icon'/>
                         <IoLogoCss3 className='work-icon'/>
                         <IoLogoJavascript className='work-icon'/>
                         <TiHtml5 className='work-icon'/>
                         <FaGitAlt className='work-icon'/>
                     </div>    
                </div>
           </div> 
   </div>
  );
}

export default Portfolio;
