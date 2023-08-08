import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css'

const Contact: React.FC = () => {
    return (
        <>
            <a href="https://github.com/louraff" target="_blank" rel="noreferrer" className="contact">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/louiseraffray/" target="_blank" rel="noreferrer" className="contact">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </>
    )
}

export default Contact