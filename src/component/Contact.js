import './Contact.scss';
import { FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io';
import { useInView } from 'react-intersection-observer'


function Contact() {
const { ref: contactRef, inView: myContactIsVisible } = useInView();

  return (
    <div ref={contactRef} className='container contact'>
        <h1 className='contact-h1'>LET'S TALK</h1>
        <div className={myContactIsVisible ? `contact-list-cont` : null} >
           <ul class="list-inline mt-4">
                <li class="list-inline-item  "><a href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer" title="github"  className='icon-cont'><BsGithub className='contact-icon'/></a></li>
                <li class="list-inline-item"><a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09" target="_blank" rel="noreferrer" title="twitter" className='icon-cont'><FaTwitter className='contact-icon'/></a></li>
                <li class="list-inline-item"><a href="https://wa.me/message/F6VY6KSDRRP4J1" target="_blank" rel="noreferrer" title="whatsapp" className='icon-cont'><IoLogoWhatsapp className='contact-icon'/></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/oladunni-waters-851b201b0" target="_blank" rel="noreferrer" title="linkedin" className='icon-cont'><FaLinkedinIn  className='contact-icon'/></a></li>
              </ul>
              
              <span  className='email-text'>waters.oladunni@gmail.com</span>
        </div>  
    </div>
  );
}
export default Contact


