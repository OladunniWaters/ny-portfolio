import './Work.scss';
import { FaGreaterThan, FaLessThan  } from 'react-icons/fa';
import img1 from '../assets/Waters-store.png';
import img2 from '../assets/React-App (1).png';
import img3 from '../assets/React-App.png';
import img4 from '../assets/5fbfd4a6-edd3-4df4-900f-866da8aa672c.webp';
import img5 from '../assets/Chart-Dashboard.png';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Work() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });



  return (
    <div>
        <h1 className='work-h1'>Portfolio</h1>
        <div  className='projects-container'>
            <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className='project-one'>
               <div>
                   <img src={img1} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Waters Store</h4>
                       <p className='project-desc'>Ecommerce web app built with React, Sass, Javascript, Redux Toolkit, and Firebase. It allows users to browse and purchase products while listening to music, and add products to cart.
                       </p>
                     </div>  
                     <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-ecommerce.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
            <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" className='project-one'>
               <div>
                   <img src={img2} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Movie Web App</h4>
                       <p className='project-desc'>Movie web app built with React, TMDB API, Javascript, Sass and React Router. It allows users to browse movies via category and view movie details with movie official trailer.
                       </p>
                     </div>  
                      <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-movie.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
             <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className='project-one'>
               <div>
                   <img src={img3} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Recipe Web App</h4>
                       <p className='project-desc'>Recipe web app built with Javascript, React, Redux Toolkit, Sass, React Router, and MealDB API. It allows users to search for recipes, view recipe details, and save recipes to favorite.
                       </p>
                     </div>  
                   <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://unrivaled-mochi-952733.netlify.app/" target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div> 
            
            
             <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" className='project-one'>
               <div>
                   <img src={img4} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>My Portfolio</h4>
                       <p className='project-desc'>Personal portfolio showcasing my skills and selected projects I built with said skills.
                       </p>
                     </div>  
                   <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://oladunniwaters.netlify.app/"  target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
           <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className='project-one'>
               <div>
                   <img src={img5} alt='...' className='project-img'/>
               </div>
               <div className='project-overlay'>
                  <div className='project-body'>
                    <div className='project-text-cont'>
                       <h4 className='project-header'>Chart-Dashboard</h4>
                       <p className='project-desc'>This is a crypto dashboard web app built with  Coinstats API , React, Javascript, Material UI, Sass and React Router. It allows users to view real-time prices and trends of cryptocurrencies.
                       </p>
                     </div>  
                   <ul className='project-link-cont'>
                        <li className='project-list'><a href="https://waters-chart-dashboard.netlify.app/Dashboard"  target="_blank" rel="noreferrer" className='project-link'><FaLessThan />Website<FaGreaterThan /></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            
            
        </div>
    </div>
  );
}
export default Work


