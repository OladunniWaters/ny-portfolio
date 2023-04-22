import "./Hero.scss";

function Hero() {

  return (
    <div className="container Hero">
      <div className='row hero-row'>
          <div className='hero-3d-cont'>
             <div className='col hero-col-1'>
               <h1 
                   className='hero-h1'>Frontend Developer.
               </h1>
                <p className='hero-p'> I like to craft solid and scalable frontend products with great user experience.</p>
                <a href='/contact' className='hero-cv'>Download CV</a>
              
           </div>
          </div>
      </div>

    </div>
  );
}
export default Hero;


