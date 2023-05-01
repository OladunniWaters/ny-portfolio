import "./Skill.scss";
//import { FaBeer } from 'react-icons/fa';
//RxCube BiCubeAlt

function Skills() {
  return (
    <div className="skills">
       <h1 className='skill-h1'>SKILLS</h1>    
       <div className='skill-cont'>
          <div className='list-cont'>
             <li className='skill'>HTML</li>
             <li className='skill'>CSS</li>
             <li className='skill'>Javascript</li>
             <li className='skill'>React.js</li>
           </div>
           
          <div className='list-cont'>
             <li className='skill'>SASS/SCSS</li>
             <li className='skill'>Tailwind CSS</li>
             <li className='skill' >Redux Toolkit</li>
             <li className='skill'>React Native</li>
           </div>
           
            <div className='list-cont'>
             <li className='skill'>Next.js</li>
             <li className='skill' >Typescript</li>
             <li className='skill'>MUI</li>
             <li className='skill'>GIT</li>
           </div>
       </div>
    </div>   
  );
}
export default Skills;
