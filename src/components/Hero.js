import "./Hero.scss";
import { BsTwitter, BsTelegram, BsLinkedin } from 'react-icons/bs';
import { IoLogoWhatsapp, IoMdMail} from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';


import heroImage from '../assets/hero1.png'




function Hero() {
  return (
    <div className="container Hero">
      <div className='row hero-row'>
           <div className='col hero-col-1'>
              <h1 className='hero-h1'>PRODUCT DESIGNER CRISTIAN MUÑOZ</h1>
                  <div className='hero-socials'>
                         <div className='hero-social-icon-div'>
                            <FaGithubSquare className='hero-social-icon' /> 
                         </div>
                         <div className='hero-social-icon-div'>
                            <BsLinkedin className='hero-social-icon' /> 
                         </div>
                         <div className='hero-social-icon-div'>
                            <IoLogoWhatsapp className='hero-social-icon' />
                         </div>
                         <div className='hero-social-icon-div'>
                            <IoMdMail className='hero-social-icon' /> 
                         </div>
                         <div className='hero-social-icon-div'>
                            <BsTelegram className='hero-social-icon' /> 
                         </div>
                         <div className='hero-social-icon-div'>
                             <BsTwitter className='hero-social-icon' /> 
                         </div>
                  </div>
                  <a className='hero-cv' href='#cv'>Download Curriculum Vitae</a>
           </div>
           
           <div className='col hero-col-2'>
               <img className='hero-image' src={heroImage} alt='hero' />
           </div>
      </div>
    </div>
  );
}
export default Hero;


