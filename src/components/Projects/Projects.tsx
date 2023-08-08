import React, {useState} from "react"
import Carousel from 'react-bootstrap/Carousel';
import '../css/Projects.css'

const Projects: React.FC = () => {


  return (
    <div className="carousel-container">
    
<Carousel interval={null}>
      <Carousel.Item>
      <img src="/assets/project-images/green.jpg" alt="portfolio website" className="asset"/>
      <Carousel.Caption className="asset">
      <a href="https://github.com/louraff/asset-vistas" target="_blank" rel="noreferrer" className="asset proj"><i className="fab fa-github"></i></a>

      <a href="https://assetvistas-778bebda714a.herokuapp.com/" target="_blank" rel="noreferrer" className="asset">
    <i className="fas fa-external-link-alt asset"></i>
  </a>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
      <img src="/assets/project-images/orange.jpg" alt="portfolio website" className="adoptly"/> 
      <Carousel.Caption className="adoptly">
      <a href="https://github.com/louraff/adoptly" target="_blank" rel="noreferrer" className="adoptly"><i className="fab fa-github"></i></a>
      <a href="https://assetvistas-778bebda714a.herokuapp.com/" target="_blank" rel="noreferrer" className="asset proj">
    <i className="fas fa-external-link-alt adoptly"></i>
  </a>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
      <img src="/assets/project-images/blue.jpg" alt="portfolio website" className="projex"/>  
      <Carousel.Caption className="projex">
      <a href="https://github.com/louraff/OpenProjex" target="_blank" rel="noreferrer" className="projex"><i className="fab fa-github"></i></a>
      <a href="https://open-projex.fly.dev/" target="_blank" rel="noreferrer" className="asset proj">
    <i className="fas fa-external-link-alt projex"></i>
  </a>
        </Carousel.Caption>  
      </Carousel.Item>



      <Carousel.Item>
      <img src="/assets/project-images/purple.jpg" alt="portfolio website" className="snake"/>
      <Carousel.Caption className="snake">
      <a href="https://github.com/louraff/snake" target="_blank" rel="noreferrer"  className="snake"><i className="fab fa-github"></i></a>
      <a href="https://louraff.github.io/snake/" target="_blank" rel="noreferrer" className="asset proj">
    <i className="fas fa-external-link-alt snake"></i>
  </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </div> 
  );
};

export default Projects;
