import  './ContactMe.scss';

import { FaRegSmileWink } from 'react-icons/fa';

import rightHand from '../assets/Point_right.png'
import leftHand from '../assets/Point_left.png'

function ContactMe() {
  return (
  <div className='container ContactMe'>
     <div className='contact-row'>

          <div className='contact-text'>
             <h3 className='contact-h3'>Contact Me</h3>
             <p className='contact-p'>Interested in working together, have a question or just want to say hi? My inbox is always open ヅ. </p>
             <a href='/' className='contact-button'>
                Get in touch
             </a>
          </div>  

     </div>
  </div>   
  );
}

export default ContactMe;