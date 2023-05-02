import "./Skill.scss";
import { BiCubeAlt } from 'react-icons/bi';


function Skills() {
  return (
    <div className="skills">
       <h1 className='skill-h1'>SKILLS</h1>    
       <div className='skill-cont'>
          <div className='list-cont'>
             <p className='skill'><BiCubeAlt className='cube'/>HTML</p>
             <p className='skill'><BiCubeAlt className='cube'/>CSS</p>
             <p className='skill'><BiCubeAlt className='cube'/>Javascript</p>
           </div>
           
          <div className='list-cont'>
             <p className='skill'><BiCubeAlt className='cube'/>React.js</p>
             <p className='skill'><BiCubeAlt className='cube'/>SASS/SCSS</p>
             <p className='skill'><BiCubeAlt className='cube'/>Tailwind CSS</p>
           </div>
           
            <div className='list-cont'>
             <p className='skill' ><BiCubeAlt className='cube'/>Redux Toolkit</p>
             <p className='skill'><BiCubeAlt className='cube'/>MUI</p>
             <p className='skill'><BiCubeAlt className='cube'/>GIT</p>
           </div>
       </div>
    </div>   
  );
}
export default Skills;
