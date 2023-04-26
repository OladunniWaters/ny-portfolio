import './Footer.scss'
import { FaRegCopyright} from 'react-icons/fa';




function Footer() {

  return (
 <>  
   <div class="footer-basic">
          <footer class='container footer'>
          <span class="copyright-1">Designed & Developed by Me</span>
           <span class="copyright-2"><FaRegCopyright />2023</span>
          </footer>
      </div>
  </>  
  )
}

export default Footer