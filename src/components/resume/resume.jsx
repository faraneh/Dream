import React from 'react';
import './resume.css';

const resume = () => {
    return ( 
        <div className="resume">
            <div className="resumeHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Resume</h1></div>
            <div className="resumeNextLine"><h2 className={"resumeSubTitle"} style={{margin: 0}}>Experience</h2><button className={'btn1'} style={{width: 200, fontSize: "0.9rem", padding: 0}}>DOWNLOAD CV</button></div>
            <div className="resumeBox experience">
                <div className="experienceOne">
                    <h2>2019-2020</h2>
                    <h3>Front End developer</h3>
                </div>
                <div className="experienceTwo">
                    <ul>
                        <li>Using HTML5, CSS, Javascript and jQuery</li>
                        <li>Building reusable code for future use</li>
                        <li>Collaborated with product team members to implement new feature developments</li>
                    </ul>
                </div>
            </div>
            <div className="resumeBox experience">
                <div className="experienceOne">
                    <h2>2018-2019</h2>
                    <h3>Junior Front End developer</h3>
                </div>
                <div className="experienceTwo">
                    <ul>
                        <li>Using HTML5, CSS, Bootstrap for website template</li>
                    </ul>
                </div>
            </div>
            <p className={'resumeFindMore'} >You can find more details in my resume, press here to find download button</p>
            <h2 className={"resumeSubTitle"}>Education</h2>
            <div className="resumeBox resumeThree">
                <ul>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                </ul>
            </div>
            <div className="resumeBox resumeFour">
                <ul>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                </ul>
            </div>
        </div>
     );
}
 
export default resume;