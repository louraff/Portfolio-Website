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
  const containerRef = useRef<HTMLElement | null>(null);
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
            getDirection: true,
            getSpeed: true,
            lerp: .8,
            class: 'is-inview',
          });
      
          return () => {
            scroll.destroy();
          };
        }
      }, []);

    return (
      <div className="App">
        {/* <div className="left-section">
          <div id="hero">
            <Hero />
            
          </div>
          <div id="contact" className='social-links'>
            <Contact />
          </div>
        </div> */}
        <NavBar />
        <div className="right-section">
            <section data-scroll-section>
          <div id="hero"
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <Hero />
          </div>
          </section>
        <div className="right-section">
            <section data-scroll-section>
          <div id="about"
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <About />
          </div>
          </section>
          <section data-scroll-section>
          <div id="skills" data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <Skills />
          </div>
          </section>
          </div>
          <section data-scroll-section >
          <div id="projects" data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <Projects />
          </div>
          </section>
          <div className='App'>
          <section data-scroll-section>
          <div id="experience" data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <Experience />
          </div>
          </section>
          <section data-scroll-section className='int'>
          <div id="interests" data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <Interests />
          </div>
          </section>
        </div>
        </div>
        <div className="fixed-icons">
    <a href="https://www.linkedin.com/in/louiseraffray/" target="_blank" rel="noreferrer" className='icons'><i className="fab fa-linkedin"></i></a>
    <a href="https://github.com/louraff" target="_blank" rel="noreferrer" className='icons'><i className="fab fa-github"></i></a>
    <a className='email'>raffraylouise@gmail.com</a>
</div>
<div className="attribution">
    Designed and developed by Louise Raffray using React & Typescript, 2023.
</div>

      </div>
    );
  };
  
  export default App;
  