import "./AboutMe.scss";
import AboutImage from '../assets/me.png'



function AboutMe() {
  return (
    <div className="container AboutMe">
       <div className='row aboutMe-row'>
          <div className='col aboutMe-col'>
             <div className='col-item'>
                <h4 className='about-h4'>ABOUT ME</h4>
                <p>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
             <div className='col-item'>
                <img src={AboutImage} alt='' className='about-image'/>
             </div>
          </div>
          
          <div className='col aboutMe-col'>
             <div className='col-item'>
                <img src={AboutImage} alt='' className='about-image'/>
             </div>
             <div className='col-item'>
                <p>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
          </div>
          
          <div className='col aboutMe-col'>
             <div className='col-item'>
                 <p>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
             <div className='col-item'>
                 <img src={AboutImage} alt='' className='about-image'/>
             </div>
          </div>
          
       </div>
    </div>
  );
}
export default AboutMe;


