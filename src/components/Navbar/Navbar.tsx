import React from 'react'

const NavBar: React.FC = () => {
  return (
    <nav>
      <a href='#about'>About Me</a>
      &nbsp; | &nbsp;
      <a href='#projects'>Projects</a>
      &nbsp; | &nbsp;
      <a href='#experience'>Experience</a>
      &nbsp; | &nbsp;
      <a href='#interests'>Interests</a>
      &nbsp; | &nbsp;
      <a href='#contact'>Contact</a>
    </nav>
  );
}

export default NavBar;