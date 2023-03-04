import "./AboutMe.scss";
import AboutImage1 from '../assets/about1.png'
import AboutImage2 from '../assets/about2.png'
import AboutImage3 from '../assets/about3.png'



function AboutMe() {
  return (
    <div className="container AboutMe">
       <div className='row aboutMe-row'>
          <div className='col aboutMe-col'>
             <div className='col-item'>
                <h4 className='about-h4'>ABOUT ME</h4>
                <p className='about-p'>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
             <div className='col-item'>
                <img src={AboutImage1} alt='' className='about-image'/>
             </div>
          </div>
          
          <div className='col aboutMe-col-2'>
             <div className='col-item'>
                <img src={AboutImage2} alt='' className='about-image'/>
             </div>
             <div className='col-item'>
                <p className='about-p'>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
          </div>
          
          <div className='col aboutMe-col'>
             <div className='col-item'>
                 <p className='about-p'>I am passionate about never stop learning, I am constantly training and learning about new and changing technology trends that way I bring an updated opinion of the Tech industry.</p>
             </div>
             <div className='col-item'>
                 <img src={AboutImage3} alt='' className='about-image'/>
             </div>
          </div>
          
       </div>
    </div>
  );
}
export default AboutMe;


