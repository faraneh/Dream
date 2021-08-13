import React from 'react';
import './navbar.css';

const navbar = (props) => {
    return (
        <div className="navbar">
            <div className="Logo" style={{display: 'flex', flexFlow: 'row', textAlign: 'center', height: '3rem', padding: 15, minWidth: 500}}>
                <div className="blueDot" />
                <p style={{marginTop: 5, fontWeight: '900', fontSize: '1.6rem', lineHeight: '1rem'}}>Farane Javadi &nbsp; &nbsp; </p>
                <p style={{fontWeight: '300', fontSize: '1.2rem', marginTop: 3}}>  / &nbsp; &nbsp;FRONT END DEVELOPER</p>
            </div>
            <div className="mainPageNavLinks">
                <ul className="mainPageNavLinksUL" >
                    <li>ABOUT ME</li>
                    <li>RESUME</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <nav className={'nav'} role='navigation'>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                        <li>ABOUT ME</li>
                        <li>RESUME</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                </ul>
            </div>
        </nav>
        </div>
     );
}
 
export default navbar;