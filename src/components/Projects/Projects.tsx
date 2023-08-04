import React from "react"
import { Card } from 'flowbite-react';
import '../css/Projects.css'

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>

      <div className="row">
        <div className="col-12 project-card">
          <div className="project-image">
            <img src="/assets/project-images/AVlaptop.jpg" alt="portfolio website"/>
          </div>
          <div className="project-details">
            <h3>Asset Vistas</h3>
            <p>Asset Vistas isn't just another Investment Portfolio Tracker; it's a friendly financial compass for those navigating the turbulent seas of stocks and investments. Born from a spirited challenge, this user-centric application delivers real-time data and dazzling visuals without the Wall Street jargon. Whether you're a seasoned investor or just dipping your toes in the market, Asset Vistas stands as a testament to simplicity, innovation, and a dash of daring.</p>
            <ul className="mt-2 flex flex-wrap">
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">D3.js</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Express</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Mongoose</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">bcrypt</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JSON</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">axios</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">RESTful API</div>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">bootstrap</div>
              </li>
              </li>
            </ul>
            {/* Add more details like tags, link to GitHub, etc. */}
          </div>
        </div>
      </div>
        {/* Repeat above structure for other projects */}

        {/* Add 'reverse' class to alternate layout */}
      <div className="row">
        <div className="col-12 project-card">
          <div className="project-image">
              <img src="/assets/project-images/8.jpg" alt="portfolio website"/>
          </div>
          <div className="project-details">
            <h3>Adoptly</h3>
            <p>Meet "Adoptly," the lovechild of a caffeine-fueled coding marathon, aspiring to be the ultimate pet matchmaker. Imagine Hinge, but instead of bad pick-up lines and dinner dates, we connect you with your next furry companion. It's a 'paw-some' testament to leadership skills, our team's dedication, and record-breaking coffee consumption. </p>
            <ul className="mt-2 flex flex-wrap">
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HTML</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SQLite</div>
              </li>
            </ul>
            {/* Add more details like tags, link to GitHub, etc. */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 project-card">
          <div className="project-image">
            <img src="/assets/project-images/7.jpg" alt="portfolio website"/>
          </div>
          <div className="project-details">
            <h3>Open Projex</h3>
            <p>Open Projex is a hub for developers to mingle, collaborate, and discover open-source projects. Think of it as a digital watering hole for code enthusiasts or a cyber marketplace for the open-source savvy. Come for the code, stay for the community!</p>
            <ul className="mt-2 flex flex-wrap">
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MongoDB</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Express</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HTML</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">CSS</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Oauth 2.0</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JWT</div>
              </li>
            </ul>
            {/* Add more details like tags, link to GitHub, etc. */}
          </div>
        </div>
      </div>
        {/* Add 'reverse' class to alternate layout */}
      <div className="row">
        <div className="col-12 project-card">
          <div className="project-image">
            <img src="/assets/project-images/6.jpg" alt="portfolio website"/>
          </div>
          <div className="project-details">
            <h3>Snakes on a Plane</h3>
            <p>Introducing 'Snakes on a Plane' - no, not the movie, but a web-based twist on the classic game of Snake! It's not just a product of my early coding journey, but a testament to the power of simplicity and a touch of childhood whimsy in the digital realm. Warning: it might be more addictive than you remember!</p>
            <ul className="mt-2 flex flex-wrap">
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HTML</div>
              </li>
              <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">CSS</div>
              </li>
            </ul>
            {/* Add more details like tags, link to GitHub, etc. */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
