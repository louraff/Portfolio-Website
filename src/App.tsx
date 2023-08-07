// Assets
import './App.css';

// React Components
import LocomotiveScroll from 'locomotive-scroll';
 

// Router
import React, {useRef, useEffect, useState} from 'react';


// Custom Components
import NavBar from './components/Navbar/Navbar';
import About from './components/About/Aboout';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

const App: React.FC = () => {
    const containerRef = useRef(null);
    const [bannerOpen, setBannerOpen] = useState(false); 
 
    // Function to toggle the banner
  const toggleBanner = () => {
    setBannerOpen(!bannerOpen);
  };

    useEffect(() => {
        if (containerRef.current) {
          const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
          });
      
          return () => {
            scroll.destroy();
          };
        }
      }, []);
      
    return (
      <main className="App">
        {/* <div className="left-section">
          <div id="hero">
            <Hero />
            <NavBar />
          </div>
          <div id="contact" className='social-links'>
            <Contact />
          </div>
        </div> */}
        <div className="right-section">
            <section data-scroll-section>
          <div id="about"
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <About />
          </div>
          </section>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
        
        </div>
       
        <div className={`skills-arrow ${bannerOpen ? 'open' : ''}`} onClick={toggleBanner}>
        <div className={`arrow ${bannerOpen ? 'up' : 'down'}`} />
      </div>
        <div className={`skills-banner ${bannerOpen ? 'open' : ''}`}>
        <div className="skills-list">
        <img src="https://devicon-website.vercel.app/api/javascript/plain.svg" alt="JavaScript" className="icon"/>
        <img src="https://devicon-website.vercel.app/api/html5/plain.svg" alt="HTML5" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/python/original.svg" alt="python" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/css3/plain.svg" alt="css" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/postgresql/plain.svg" alt="postgresql" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/sqlite/original.svg" alt="sqlite" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/react/original.svg" alt="react" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/nodejs/plain.svg" alt="node" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/express/original.svg" alt="express" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/django/plain.svg" alt="express" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/d3js/original.svg" alt="d3" className="icon"></img>
        <img src="https://devicon-website.vercel.app/api/mongodb/original.svg" alt="d3" className="icon"></img>


        </div>
        
        {/* Add your icons here, e.g., <i className="fab fa-js"></i> */}
        
      </div>
   
      </main>
    );
  };
  
  export default App;
  