import React from "react"
import '../css/About.css'

const About: React.FC = () => {
    return (
    <div className="container-section" data-scroll data-scroll-speed="3">
         <div className="animate-section fadeIn">
        <p className="about">
            My fascination with programming is echoed in an analogy from a lecture by Professor Zammit of Malta University. While languages are like lakes - finite and fully graspable – coding is an ocean, boundless in its depth and breadth of learning and exploration.
<br />
<br />
            One day, while deep-diving into JavaScript and HTML I came to a realisation: coding is not just a skill but a craft, a means to channel my creativity and problem-solving skills into tangible solutions that could make a real difference. Now, as a newly minted Software Engineer from General Assembly, my entry into the tech industry is fueled by curiosity, adaptability, and an unyielding drive for knowledge and growth. 
            <br />
            <br />
            Honed in the dynamic environment of tech startups and the ever-evolving world of social media, my problem-solving abilities lend a distinct perspective to my approach in software engineering. As I anticipate my next role as a developer, I look forward to diving deeper into this boundless ocean of technology, anticipating the thrill of new challenges and the reward of innovative solutions.
        </p>
        </div>
    </div>
    );
}

export default About