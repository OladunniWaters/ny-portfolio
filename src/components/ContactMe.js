import  './ContactMe.scss';

import contactImage from '../assets/me.png'

function ContactMe() {
  return (
    <div className='contact_container'>
        <div className='contactImage'>
               <div className='cute_astronaut_circle'></div>
               <img src={contactImage} alt="astronaut" className='cute_astronaut'/>
         </div> 
    
      <form action="https://formsubmit.oladunniwaters@gmail.com" method="POST" className='form'>
           <div className='contact_labelbox'>
                <label for="exampleFormControlInput1" class="form-label" className='contact_label'>NAME</label>
                 <input type="text" name="name" required className='contact_name' placeholder="Oladunni Waters"/>
           </div> 
           
           <div className='contact_labelbox'>
               <label for="exampleFormControlInput1" class="form-label" className='contact_label' >EMAIL</label>
                <input type="email" name="email" required className='contact_email' placeholder="oladunniwaters@gmail.com"/>
           </div> 
           
           <div className='contact_labelbox'>
                <label for="exampleFormControlTextarea1" class="form-label" className='contact_label_text'>CONTENT</label>
                <textarea class="form-control" placeholder="Send me a cheesy message ( * >  *)" rows="3" className='contact_textarea'></textarea>
           </div>     
           <button type="submit" className='contact_btn'>Send</button>
      </form>

    </div>
  );
}

export default ContactMe;