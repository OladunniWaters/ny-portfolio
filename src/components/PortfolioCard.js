import  './PortfolioCard.scss';


export default function PortfolioCard( { project }) {
  const { id, title , desc ,  image, tools } = project
  
  return (
    <div id={id}>
       <div className="card-cont">
          <img src={image}  alt="..." className="card-image"/>
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-desc">{desc}</p>
            <button className="card-btn">{tools.javascript}</button>
          </div>
        </div>
    </div>
  );
}
