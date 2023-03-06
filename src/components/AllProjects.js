import PortfolioData from "../data/PortfolioData";
import PortfolioCard from "./PortfolioCard";
import  './Portfolio.scss';


function Portfolio() {
  
  return (
    <div className='container Portfolio'>
            <h2 className='portfolio-h2'>PROJECTS</h2>
            <div className='portfolio-card'>
              {PortfolioData.map((project)=>{
                 return (
                         <PortfolioCard
                            project ={project}
                         />
               );})}
           </div>    
   </div>
  );
}

export default Portfolio;
