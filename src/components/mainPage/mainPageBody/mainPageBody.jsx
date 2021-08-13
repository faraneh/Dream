import React from 'react';
import './mainPageBody.css'
import personalImage from '/Users/farane/Documents/Codes/dream-GITHUB/src/assets/images/personalImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const mainPageBody = (props) => {
    return ( 
        <div className="mainPageBodyBackground">
            <div className="mainPageBodyCreamBoxLeft"></div>
            <div className="mainPageCenterBox">
                <div className="mainPageCenterBoxLeft">
                    <img className={'personalImage'} src={personalImage} alt={'personalImage'} />
                    <h1>Farane</h1>
                    <h1>Javadi</h1>
                    <hr className="blueLine" />
                    <h2>FRONT END DEVELOPER</h2>
                    <div className="mainPageLeftBoxBottom">
                        <a href="https://github.com/faraneh" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faGithubSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                        <a href="https://www.linkedin.com/in/faraneh-javadinejad" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                        <a href="https://twitter.com/faranehjn" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                        <a className={'emailLink'} href={"mailto:faraneh.javadinejad@gmail.com"}><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                    </div>
                </div>
                <div className="mainPageCenterBoxRight">
                    <h2>Hello</h2>
                    <h4>Here's who I am and what I do</h4>
                    <div className="mainPageButtons">
                        <button className={'btn1'}>RESUME</button>
                        <button className={'btn2'}>PROJECTS</button>
                    </div>
                    <p className={'mainBodyDesc'}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.<br /><br />
 
 I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
        </div>
     );
}
 
export default mainPageBody;