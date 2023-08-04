import React from "react";
import { Card } from 'flowbite-react';
import '../css/Projects.css';

const Proj: React.FC = () => {
  return (
    <ul className="featured__StyledProjectsGrid-ywnbqt-0 dnNJYD">
      <li className="featured__StyledProject-ywnbqt-1 gvznfB" data-sr-id="4" style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }}>
        <div className="project-content">
          <h3 className="project-title">
            <a href="https://assetvistas-778bebda714a.herokuapp.com" rel="noopener noreferrer" target="_blank">Asset Vistas</a>
          </h3>
          <div className="project-desctiption">
            <p>Asset Vistas isn't just another Investment Portfolio Tracker; it's a friendly financial compass for those navigating the turbulent seas of stocks and investments. Born from a spirited challenge, this user-centric application delivers real-time data and dazzling visuals without the Wall Street jargon. Whether you're a seasoned investor or just dipping your toes in the market, Asset Vistas stands as a testament to simplicity, innovation, and a dash of daring.</p>
          </div>
          <ul className="project-tech-list mt-2 flex flex-wrap">

            {/* ...rest of the JSX code... */}

          </ul>
          <div className="project-links">
            <a href="https://github.com/louraff/asset-vistas" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://assetvistas-778bebda714a.herokuapp.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1={10} y1={14} x2={21} y2={3}></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="project-image">
          <a href="https://assetvistas-778bebda714a.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <div data-gatsby-image-wrapper className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
              <div style={{ maxWidth: '700px', display: 'block' }}>
              <img alt="" role="presentation" aria-hidden="false" src="/assets/project-images/AVlaptop.jpg" style={{ maxWidth: '100%', display: 'block', position: 'static' }} />

              </div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  )
}
export default Proj;
