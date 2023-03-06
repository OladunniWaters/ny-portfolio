import './Footer.scss'
import { BsTwitter, BsTelegram, BsLinkedin } from 'react-icons/bs';
import { IoLogoWhatsapp, IoMdMail} from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';

import ContactMe from '../components/ContactMe';


function Footer() {

  return (
 <>  
   <ContactMe className='contact-footer'/> 
   <div class="footer-basic">
          <footer>
              <div class="social">
                  <a href="#"><FaGithubSquare  class="icon ion-social-instagram" /></a>
                  <a href="#"><BsTwitter class="icon ion-social-snapchat" /></a>
                  <a href="#"><BsLinkedin class="icon ion-social-twitter" /></a>
                  <a href="#"><IoMdMail class="icon ion-social-facebook" /></a>
              </div>
              <ul class="list-inline">
                  <li class="list-inline-item"><a href="#">Home</a></li>
                  <li class="list-inline-item"><a href="#">Works</a></li>
                  <li class="list-inline-item"><a href="#">Contact</a></li>
              </ul>
              <p class="copyright">Designed & Developed by Me</p>
          </footer>
      </div>
  </>  
  )
}

export default Footer