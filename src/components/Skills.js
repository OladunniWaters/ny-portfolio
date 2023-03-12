import "./Skills.scss";
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { TiHtml5 } from 'react-icons/ti';
import { SiTailwindcss, SiRedux, SiBootstrap, SiReactrouter, SiMaterialui } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';




function Skills() {
  return (
    <div className="container Skills">
        <div className='Skills-row'>
           <h3 className='skills-h3'>SKILLS</h3>
           <div className='skills-cont'>
              <div className='skills-icon1'>
                   <FaReact className='skills-icon'/>
              </div>
              
              <div className='skills-icon2'>
                   <IoLogoJavascript className='skills-icon'/>
               </div>
               
               <div className='skills-icon3'>
                   <TiHtml5 className='skills-icon'/>
               </div> 
               
               <div className='skills-icon4'>
                   <IoLogoCss3 className='skills-icon'/>
               </div>  
               
               <div className='skills-icon5'>
                   <FaGitAlt className='skills-icon'/>
               </div> 
               
                <div className='skills-icon6'>
                   <FiFigma className='skills-icon'/>
               </div>
               
                <div className='skills-icon7'>
                   <TbBrandReactNative className='skills-icon'/>
               </div> 
               
                <div className='skills-icon8'>
                   <SiMaterialui className='skills-icon'/>
               </div> 
               
                <div className='skills-icon9'>
                   <SiReactrouter className='skills-icon'/>
               </div>
               
               <div className='skills-icon11'>
                   <SiTailwindcss className='skills-icon'/>
               </div>
               
                <div className='skills-icon10'>
                   <SiRedux className='skills-icon'/>
               </div> 
               
               
                <div className='skills-icon12'>
                   <SiBootstrap className='skills-icon'/>
               </div> 
              </div>
           </div>   
      </div>
  );
}
export default Skills;

