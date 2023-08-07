import React from "react"
import "../css/Skills.css"

const Skills: React.FC = () => {
    return(
        <div className="skills-section">
        <div className="skills-title">Skills</div>
        <div className="skills-container">
            <div className="skills-cols">
                <div className="skills-cols-title">Languages</div>
                <ul>
                    <li className="skill">JavaScript</li>
                    <li className="skill">Python</li>
                    <li className="skill">Typescript</li>
                    <li className="skill">HTML5</li>
                    <li className="skill">CSS3</li>
                    <li className="skill">SQL</li>
                </ul>
            </div>
            <div className="skills-cols">
                <div className="skills-cols-title">Frameworks</div>
                <ul>
                    <li className="skill">React.js</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Express.js</li>
                    <li className="skill">Django</li>
                    <li className="skill">D3.js</li>
                </ul>
            </div>
            <div className="skills-cols">
                <div className="skills-cols-title">Tools</div>
                <ul>
                    <li className="skill">MongoDB</li>
                    <li className="skill">PostgreSQL</li>
                    <li className="skill">MySWL</li>
                    <li className="skill">Git</li>
                    <li className="skill">GitHub</li>
                    <li className="skill">axios</li>
                    <li className="skill">JSON</li>
                    <li className="skill">Postman</li>
                    <li className="skill">VScode</li>
                    <li className="skill">JWT</li>
                    <li className="skill">pip</li>
                    <li className="skill">npm</li>
                    <li className="skill">Oauth 2.0</li>
                </ul>
            </div>
            <div className="skills-cols">
                <div className="skills-cols-title">Design</div>
                <ul>
                    <li className="skill">MongoDB</li>
                    <li className="skill">PostgreSQL</li>
                    <li className="skill">MySWL</li>
                    <li className="skill">Git</li>
                    <li className="skill">GitHub</li>
                    <li className="skill">axios</li>
                    <li className="skill">JSON</li>
                    <li className="skill">Postman</li>
                    <li className="skill">VScode</li>
                    <li className="skill">JWT</li>
                    <li className="skill">pip</li>
                    <li className="skill">npm</li>
                    <li className="skill">Oauth 2.0</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Skills