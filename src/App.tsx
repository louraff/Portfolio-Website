// Assets
import './App.css';

// React Components

// Router
import React from 'react';


// Custom Components
import NavBar from './components/Navbar/Navbar';
import About from './components/About/Aboout';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {

  return (
    <main className="App">
          <NavBar/>
  
     <div id="hero">
        <Hero />
     </div>

     <div id="about">
       <About />
     </div>

     <div id="projects">
      <Projects />
     </div>

     <div id="experience">
      <Experience />
     </div>

     <div id="interests">
      <Interests />
     </div>

     <div id="contact">
      <Contact />
     </div>
    </main>
  );
}

export default App;