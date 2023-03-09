import PortfolioData from "../data/PortfolioData";
import PortfolioCard from "./PortfolioCard";
import  './Portfolio.scss';


function Portfolio({ project }) {
  
  return (
    <div className='container Portfolio'>
            <h2 className='portfolio-h2'>PROJECTS</h2>
            <div className='portfolio-card'>
         
                         <PortfolioCard

                         />
           </div>    
   </div>
  );
}

export default Portfolio;
