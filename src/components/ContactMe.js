import  './ContactMe.scss';
import rightHand from '../assets/Point_right.png'
import leftHand from '../assets/Point_left.png'

function ContactMe() {
  return (
  <div className='container ContactMe'>
     <div className='contact-row'>
          <img src={rightHand} alt='3d rightHand' className='contact-image'/>
          <div className='contact-text'>
             <h3 className='contact-h3'>Contact Me</h3>
             <p className='contact-p'>Interested in working together, have a question or just want to say hi? My inbox is always open.</p>
             <a href='/' className='contact-button'>
                Get in touch
             </a>
          </div>  
          <img src={leftHand} alt='3d leftHand' className='contact-image'/>
     </div>
  </div>   
  );
}

export default ContactMe;