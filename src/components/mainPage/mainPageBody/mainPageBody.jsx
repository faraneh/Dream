import React from 'react';
import './mainPageBody.css'
import personalImage from '../../../assets/images/personalImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import MainPageFooter from '../mainPageFooter/mainPageFooter';
// import reactDom from 'react-dom';

const mainPageBody = (props) => {
    return ( 
        <div className={'mainPage'}>
            <Navbar className={'mainPageNavbarStyle'} /> 
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
                            <a href="https://github.com/faraneh" rel = "noopener noreferrer" target="_blank" ><FontAwesomeIcon icon={faGithubSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                            <a href="https://www.linkedin.com/in/faraneh-javadinejad" rel = "noopener noreferrer" target="_blank" ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                            <a href="https://twitter.com/faranehjn" rel = "noopener noreferrer" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                            <a className={'emailLink'} href={"mailto:faraneh.javadinejad@gmail.com"}><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)', fontSize: '2.03rem'}} /></a>
                        </div>
                    </div>
                    <div className="mainPageCenterBoxRight">
                        <h2>Hello</h2>
                        <h4>Here's who I am and what I do</h4>
                        <div className="mainPageButtons">
                            <button className={'btn1'}><Link to={{
                                pathname: '/resume'
                            }} style={{textDecoration: 'none', color: 'inherit'}}>RESUME</Link></button>
                            <button className={'btn2'}><Link to={{
                                pathname: '/projects'
                            }} style={{textDecoration: 'none', color: 'inherit'}}>PROJECTS</Link></button>
                        </div>
                        <p className={'mainBodyDesc'}>My name is Farane and I'm front end developer, I ususally work with react, and Im axperienced in HTML, CSS, JS, Reactjs and Redux. <br /> In each project I do search for better ways to build minimal, simple, beautifull websites which helps my clients to reach their needs, In my idea, small details can make big changes, if we know how to make them with creativity and passion :)</p>
                    </div>
                </div>
            </div>
            <MainPageFooter style={{position: 'absolute', marginTop: 100}} />
        </div>
     );
}
 
export default mainPageBody;