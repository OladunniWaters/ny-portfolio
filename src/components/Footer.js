import './Footer.scss'
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { IoMdMail} from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';

import ContactMe from '../components/ContactMe';


function Footer() {

  return (
 <>  
   <ContactMe className='contact-footer'/> 
   <div class="footer-basic">
          <footer>
              <div class="social">
                  <a href="https://github.com/OladunniWaters"><FaGithubSquare  class="icon ion-social-instagram" /></a>
                  <a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09"><BsTwitter class="icon ion-social-snapchat" /></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><BsLinkedin class="icon ion-social-twitter" /></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><IoMdMail class="icon ion-social-facebook" /></a>
              </div>
              <ul class="list-inline">
                  <li class="list-inline-item"><a href="/">Home</a></li>
                  <li class="list-inline-item"><a href="/portfolio">Works</a></li>
                  <li class="list-inline-item"><a href="/contact">Contact</a></li>
              </ul>
              <p class="copyright">Designed & Developed by Me</p>
          </footer>
      </div>
  </>  
  )
}

export default Footer