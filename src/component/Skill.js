import "./Skill.scss";


function Skills() {
  return (
    <>
    <div className="skills">
       <h1 className='skill-h1'>SKILLS</h1>    
       <div className='skill-cont'>
          <ul>
             <li className='skill'>HTML</li>
             <li className='skill'>CSS</li>
             <li className='skill'>Javascript</li>
             <li className='skill'>React.js</li>
           </ul>
           
          <ul>
             <li className='skill'>SASS/SCSS</li>
             <li className='skill'>Tailwind CSS</li>
             <li className='skill' >Redux Toolkit</li>
             <li className='skill'>React Native</li>
           </ul>
           
            <ul>
             <li className='skill'>Next.js</li>
             <li className='skill' >Typescript</li>
             <li className='skill'>MUI</li>
             <li className='skill'>GIT</li>
           </ul>
       </div>
    </div>   
   </>
  );
}
export default Skills;

