import React from "react"
import { Card } from 'flowbite-react';
import '../css/Projects.css'


const Projects: React.FC = () => {
    return(
      <>
      <Card
        horizontal
        imgSrc="/assets/project-images/AVlaptop.jpg"
        className="card av"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Asset Vistas
          </p>
        </h5>
        <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Solo Project | One Week
          </p>
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
          Asset Vistas isn't just another Investment Portfolio Tracker; it's a friendly financial compass for those navigating the turbulent seas of stocks and investments. Born from a spirited challenge, this user-centric application delivers real-time data and dazzling visuals without the Wall Street jargon. Whether you're a seasoned investor or just dipping your toes in the market, Asset Vistas stands as a testament to simplicity, innovation, and a dash of daring.
          </p>
        </p>
      </Card>


        <Card
        horizontal
        imgSrc="/assets/project-images/8.jpg"
        className="card"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Adoptly
          </p>
        </h5>
        <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Group Project | One Week
          </p>
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
          Meet "Adoptly," the lovechild of a caffeine-fueled coding marathon, aspiring to be the ultimate pet matchmaker. Imagine Hinge, but instead of bad pick-up lines and dinner dates, we connect you with your next furry companion. It's a 'paw-some' testament to leadership skills, our team's dedication, and record-breaking coffee consumption. 
          </p>
        </p>
      </Card>

  

      <Card
        horizontal
        imgSrc="/assets/project-images/7.jpg"
        className="card op"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Open Projex
          </p>
        </h5>
        <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Solo Project | One Week
          </p>
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
          Meet "Adoptly," the lovechild of a caffeine-fueled coding marathon, aspiring to be the ultimate pet matchmaker. Imagine Hinge, but instead of bad pick-up lines and dinner dates, we connect you with your next furry companion. It's a 'paw-some' testament to leadership skills, our team's dedication, and record-breaking coffee consumption. 
          </p>
        </p>
      </Card>

      <Card
        horizontal
        imgSrc="/assets/project-images/6.jpg"
        className="card"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Snakes on a Plane
          </p>
        </h5>
        <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Solo Project | Three Days
          </p>
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
          Introducing 'Snakes on a Plane' - no, not the movie, but a web-based twist on the classic game of Snake! It's not just a product of my early coding journey, but a testament to the power of simplicity and a touch of childhood whimsy in the digital realm. Warning: it might be more addictive than you remember!
          </p>
        </p>
      </Card>
    </>

    )
}

export default Projects