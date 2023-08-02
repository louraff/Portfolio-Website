import React from "react"
import { Card } from 'flowbite-react';


const Projects: React.FC = () => {
    return(
        <Card
        horizontal
        imgSrc="/images/blog/image-4.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            Adoptly
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </p>
      </Card>
    )
}

export default Projects