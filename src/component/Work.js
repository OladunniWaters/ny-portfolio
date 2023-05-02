import './Work.scss';
import { FaGreaterThan, FaLessThan  } from 'react-icons/fa';
import img1 from '../assets/Waters-store.png';
import img2 from '../assets/React-App (1).png';
import img3 from '../assets/React-App.png';
import img4 from '../assets/5fbfd4a6-edd3-4df4-900f-866da8aa672c.webp';
import img5 from '../assets/Chart-Dashboard.png';
import { useInView } from 'react-intersection-observer';



function Work() {
const { ref: myRef, inView: myElementIsVisible } = useInView();


  return (
    <div ref={myRef}>
        <h1 className='work-h1'>Portfolio</h1>
        <div className='projects-container'>
            <div className='project-one'>
               <div>
                   <img src={img1} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Waters Store</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                     <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-ecommerce.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
            <div className='project-one'>
               <div>
                   <img src={img2} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Movie Trailer</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                      <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-movie.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
             <div className='project-one'>
               <div>
                   <img src={img3} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Recipe WebApp</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                   <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://unrivaled-mochi-952733.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div> 
            
            
             <div className='project-one'>
               <div>
                   <img src={img4} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>My Portfolio</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                   <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-chart-dashboard.netlify.app/Dashboard"  target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
           <div className='project-one'>
               <div>
                   <img src={img5} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Chart-Dashboard</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                    <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-movie.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
             <div className='project-one'>
               <div>
                   <img src={img1} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Waters Store</h4>
                       <p className='project-desc'>Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navaigate he web
                       </p>
                     </div>  
                    <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-movie.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
        </div>
    </div>
  );
}
export default Work


