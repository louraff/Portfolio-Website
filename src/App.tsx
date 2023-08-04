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
import Proj from './components/Projects/Pro';

const App: React.FC = () => {
    const containerRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
          const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
          });

          scroll.on('scroll', (instance) => {
            // Get the About section's height plus an optional offset (you can adjust the value)
            const aboutSectionHeight = document.getElementById("about")?.clientHeight || 0;
            const threshold = aboutSectionHeight + 100; // adjust 100 as needed
      
            if (instance.scroll.y > threshold) {
              document.getElementById("projects")?.classList.remove("hidden-section");
              document.getElementById("experience")?.classList.remove("hidden-section");
            }
          });
      
          // Update scroll instance on mount and on every render
          scroll.update();
      
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
        <div className="right-section" data-scroll-container>
            <section data-scroll-section>
          <div id="about"
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="3">
            <About />
          </div>
          </section>
          <section data-scroll-section>
          <div id="projects" data-scroll className="hidden-section">
            <Proj />
          </div>
          </section>
          <section data-scroll-section>
          <div id="experience" data-scroll className="hidden-section">
            <Experience />
          </div>
        </section>
        </div>
      </main>
    );
  };
  
  export default App;
  