import React, { useEffect, useState } from 'react';
import '../css/Navbar.css'

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

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

    document.querySelectorAll('#hero, #about, #projects, #experience, #interests, #skills, #contact').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const yOffset = -250; // Adjust this value based on the height of your navbar
    const element = document.getElementById(targetId);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

  return (
    <nav>
      <a href="#interests" onClick={(e) => handleNavLinkClick(e, 'interests')} className={activeSection === 'interests' ? 'active' : ''}>Interests</a>
     
      <a href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
      <a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
      <a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
      <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
      <a href="#hero" onClick={(e) => handleNavLinkClick(e, 'hero')} className={activeSection === 'hero' ? 'active' : ''}>Home</a>
    </nav>
  );
}

export default NavBar;
