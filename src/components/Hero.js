import "./Hero.scss";
//import { BsTwitter, BsTelegram, BsLinkedin } from 'react-icons/bs';
//import { IoLogoWhatsapp, IoMdMail} from 'react-icons/io';
//import { FaGithubSquare } from 'react-icons/fa';


//import heroImage1 from '../assets/Spring_Fat_Tall_R Shadowless.png'
import heroImage2 from '../assets/Sphere_Low_Poly_1__L Shadowless.png'
import heroImage3 from '../assets/Sphere_Ring_Standing_R Shadowless.png'
import heroImage4 from '../assets/Tube_Medium_Laying_4__L Shadowless.png'
import heroImage5 from '../assets/Tube_Long_Laying_3__L Shadowless.png'
//import heroImage6 from '../assets/Sphere_Low_Poly_3__R Shadowless.png'
//import heroImage7 from '../assets/Platonic_3_-_Icosa_R Shadowless.png'



function Hero() {
  return (
    <div className="container Hero">
      <div className='row hero-row'>
          <div className='hero-3d-cont'>
               
               <div className='hero-3d-2'>
                  <img src={heroImage2} alt='3d shapes' className='hero-3d'/>
               </div> 
               
               <div className='hero-3d-3'>
                  <img src={heroImage3} alt='3d shapes' className='hero-3d'/>
               </div> 
               
               <div className='hero-3d-4'>
                  <img src={heroImage4} alt='3d shapes' className='hero-3d'/>
               </div> 
               
               <div className='hero-3d-5'>
                  <img src={heroImage5} alt='3d shapes' className='hero-3d'/>
               </div> 
               

               

               
             <div className='col hero-col-1'>
               <h1 className='hero-h1'>Frontend Developer.</h1>
                <p className='hero-p'>I like to craft solid and scalable frontend products with great user experience.</p>
                <a href='/contact' className='hero-cv'>Download Curriculum Vitae</a>
           </div>
          </div>
          
      </div>
    </div>
  );
}
export default Hero;


