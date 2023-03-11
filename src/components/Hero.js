import "./Hero.scss";
//import { BsTwitter, BsTelegram, BsLinkedin } from 'react-icons/bs';
//import { IoLogoWhatsapp, IoMdMail} from 'react-icons/io';
//import { FaGithubSquare } from 'react-icons/fa';


import heroImage from '../assets/Spring_Fat_Tall_R Shadowless.png'




function Hero() {
  return (
    <div className="container Hero">
      <div className='row hero-row'>
           <div className='col hero-col-1'>
               <h1 className='hero-h1'>Frontend Developer.</h1>
                <p className='hero-p'>I like to craft solid and scalable frontend products with great user experience.</p>
           </div>
      </div>
    </div>
  );
}
export default Hero;


