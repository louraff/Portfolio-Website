import React, { useEffect, useState } from 'react';
import '../css/Navbar.css'

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll('#hero, #about, #projects, #experience, #interests, #contact').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
      <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
      <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
      <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
    </nav>
  );
}

export default NavBar;
