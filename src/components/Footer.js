import './Footer.scss'
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { IoMdMail} from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';




function Footer() {

  return (
 <>  
   <div class="footer-basic">
          <footer class='container footer'>
          <p class="copyright">Designed & Developed by Me</p>
              <div class="social">
                  <a href="https://github.com/OladunniWaters"><FaGithubSquare  class="icon ion-social-instagram" /></a>
                  <a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09"><BsTwitter class="icon" /></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><BsLinkedin class="icon ion-social-twitter" /></a>
                  <a href="https://www.linkedin.com/mwlite/profile/me"><IoMdMail class="icon ion-social-facebook" /></a>
              </div>
              
          </footer>
      </div>
  </>  
  )
}

export default Footer