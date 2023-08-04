// Assets
import './App.css';

// React Components
import LocomotiveScroll from 'locomotive-scroll';
 

// Router
import React, {useRef, useEffect} from 'react';


// Custom Components
import NavBar from './components/Navbar/Navbar';
import About from './components/About/Aboout';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
    const containerRef = useRef(null);


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
        <div className="left-section">
          <div id="hero">
            <Hero />
            <NavBar />
          </div>
          <div id="contact" className='social-links'>
            <Contact />
          </div>
        </div>
        <div className="right-section">
            <section data-scroll-section>
          <div id="about"
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <About />
          </div>
          </section>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
        
        </div>
      </main>
    );
  };
  
  export default App;
  