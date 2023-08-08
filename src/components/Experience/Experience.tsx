// import {VerticalTimeline} 'flowbite';
import React, {useState} from 'react'
import '../css/Experience.css'

const Experience: React.FC = () => {

    const [visibility, setVisibility] = useState([false, false, false, false]);

     // Function to toggle the visibility of the paragraph at a specific index
    const toggleVisibility = (index: number) => {
        const newVisibility = [...visibility];
        newVisibility[index] = !newVisibility[index];
        setVisibility(newVisibility);
    };

    return(
<div className="container-section">
<div className='jobs'>
    <div className='job'>
        <div className='time-place'>
        <div className='company-time'>
            <div className='company'>
                <a href="https://generalassemb.ly/" target="_blank" className='ex'>General Assembly</a>
            </div>   
            <div className='time'>Apr 2023 - Jul 2023</div>
            </div>
            <div className='position'>Student</div>
        </div>
    </div>
    <div className='job'>
        <div className='time-place'>
        <div className='company-time'>
            <div className='company'>
                <a href="https://www.bosh.tv/" target="_blank" className='ex'>BOSH!</a>
            </div>   
            <div className='time'>Oct 2023 - Dec 2023</div>
            </div>
            <div className='position'>Social Media Executive</div>
        </div>
    </div>
    <div className='job'>
        <div className='time-place'>
        <div className='company-time'>
            <div className='company'>
                <a href="https://bridebook.com/uk" target="_blank" className='ex'>Bridebook</a>
            </div>   
            <div className='time'>Jan 2020 - Sep 2022</div>
            </div>
            <div className='position'>Freelance Social Media Manager</div>
        </div>
    </div>
    <div className='job'>
        <div className='time-place'>
        <div className='company-time'>
            <div className='company'>
                <a href="https://bridebook.com/uk" target="_blank" className='ex'>Bridebook</a>
            </div>   
            <div className='time'>Sep 2019 - Sep 2022</div>
            </div>
            <div className='position'>Freelance Community Manager</div>
        </div>
    </div>
    
</div>
</div>
    )
}

export default Experience;