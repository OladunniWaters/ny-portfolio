import  './ContactMe.scss';


function ContactMe() {
  return (
  <div className='container ContactMe'>
     <div className='contact-row'>

          <div className='contact-text'>
             <h3  data-aos="fade-up"  data-aos-duration="1000"   data-aos-delay="500" data-aos-offset="100px" data-aos-ease = 'ease'  className='contact-h3'>Contact Me</h3>
             <p  data-aos="fade-up"  data-aos-duration="1500"   data-aos-delay="1000" data-aos-offset="150px" data-aos-ease = 'ease'  className='contact-p'>Interested in working together, have a question or just want to say hi? My inbox is always open ヅ. </p>
             <a  data-aos="fade-up"  data-aos-duration="2000"   data-aos-delay="1500" data-aos-offset="200px" data-aos-ease = 'ease'   href='/' className='contact-button'>
                Get in touch
             </a>
          </div>  

     </div>
  </div>   
  );
}

export default ContactMe;