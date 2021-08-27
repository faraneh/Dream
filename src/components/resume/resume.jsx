import React from 'react';
import './resume.css';
import Navbar from '../navbar/navbar';
import MainPageFooter from '../mainPage/mainPageFooter/mainPageFooter';

const resume = () => {

    const executeScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }
    
    return ( 
        <div className="resume">
            <Navbar className={'mainPageNavbarStyle'} /> 
            <div className="resumeHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Resume</h1></div>
            <div className="resumeNextLine"><h2 className={"resumeSubTitle"} style={{margin: 0}} >Experience</h2><button className={'btn1'} style={{width: 200, fontSize: "0.9rem", padding: 0}}>DOWNLOAD CV</button></div>
            <div className="resumeBox experience">
                <div className="experienceOne">
                    <h2>2019 - 2020</h2>
                    <h3>Front End Developer</h3>
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
                    <h3>Junior Front End Developer</h3>
                </div>
                <div className="experienceTwo">
                    <ul>
                        <li>Using HTML5, CSS, Bootstrap for website template</li>
                    </ul>
                </div>
            </div>
            <p className={'resumeFindMore'} >You can find more details in my resume, press <button className={'noBtn'} onClick={executeScroll}>here</button> to find download button</p>
            <h2 className={"resumeSubTitle"}>Education</h2>
            <div className="resumeBox experience"  style={{height: 250, paddingTop: 0}}>
                <div className="experienceOne">
                    <h2 style={{marginTop: 30}}>2007 - 2011</h2>
                </div>
                <div className="experienceTwo">
                    <ul>
                        <li style={{listStyle: 'none'}}><h3>BSc of Computer engineering / Software</h3></li>
                        <li style={{listStyle: 'none'}}>DIAU</li>
                    </ul>
                </div>
            </div>
            <div className="resumeBox experience"  style={{height: 250, paddingTop: 0}}>
                <div className="experienceOne">
                    <h2 style={{marginTop: 30}}>2015-2017</h2>
                </div>
                <div className="experienceTwo">
                    <ul>
                        <li style={{listStyle: 'none'}}><h3>MBA (intensive program)</h3></li>
                        <li style={{listStyle: 'none'}}>TEHRAN UNIVERSITY</li>
                    </ul>
                </div>
            </div>
            <p className={'resumeFindMore'} >You can find more details in my resume, press <button className={'noBtn'} onClick={executeScroll}>here</button> to find download button</p>
            <h2 className={"resumeSubTitle"}>Programming Languages</h2>
            <div className="resumeBox experience"  style={{height: 250, paddingTop: 20}}>
                <ul>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>HTML5, CSS3, Bootstrap</b></p></li>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>Javascript, jQuary, node.js</b></p></li>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>React, Redux</b></p></li>
                </ul>
            </div>
            <h2 className={"resumeSubTitle"}>Softwares</h2>
            <div className="resumeBox experience"  style={{height: 200, paddingTop: 20}}>
                <ul>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>GitHub, Agile, Jira</b></p></li>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>Microsoft office</b></p></li>
                </ul>
            </div>
            <h2 className={"resumeSubTitle"}>Languages</h2>
            <div className="resumeBox experience"  style={{height: 200, paddingTop: 20}}>
                <ul>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>English, French</b></p></li>
                    <li className={'resumeList'}><div className="blueDotResume" /><p><b>Persian, Turkish</b></p></li>
                </ul>
            </div>
            <MainPageFooter style={{position: 'relative', height: '8rem', marginTop: 100}} />
        </div>
     );
}
 
export default resume;