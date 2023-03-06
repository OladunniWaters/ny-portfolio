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
                   <FaReact className='skills-icon'/>
                   <IoLogoJavascript className='skills-icon'/>
                   <TiHtml5 className='skills-icon'/>
                   <SiRedux className='skills-icon'/>
                   <IoLogoCss3 className='skills-icon'/>
                   <FaGitAlt className='skills-icon'/>
                   <SiTailwindcss className='skills-icon'/>
                   <SiReactrouter className='skills-icon'/>
                   <SiBootstrap className='skills-icon'/>
                   <SiMaterialui className='skills-icon'/>
                   <TbBrandReactNative className='skills-icon'/>
                   <FiFigma  className='skills-icon'/>
              </div>
           </div>   
      </div>
  );
}
export default Skills;

