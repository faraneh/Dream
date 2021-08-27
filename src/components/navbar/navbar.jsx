import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {
    return (
        <div className="navbar">
            <div className="Logo" style={{display: 'flex', flexFlow: 'row', textAlign: 'center', height: '3rem', padding: 15, minWidth: 500}}>
                <div className="blueDot" />
                    <NavLink to= "/" exact style={{ textDecoration: 'none', color : 'black', display: 'flex' }} >
                        <p style={{marginTop: 5, fontWeight: '900', fontSize: '1.7rem', lineHeight: '1rem'}}>Farane Javadi &nbsp; &nbsp; </p>
                        <p style={{fontWeight: '300', fontSize: '1.2rem', marginTop: 3}}>  / &nbsp; &nbsp;FRONT END DEVELOPER</p>
                    </NavLink>
            </div>
            <div className="mainPageNavLinks">
                <ul className="mainPageNavLinksUL" >
                    <li><NavLink to= "/" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >ABOUT ME</NavLink></li>
                    <li><NavLink to= "/resume" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >RESUME</NavLink></li>
                    <li><NavLink to= "/projects" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >PROJECTS</NavLink></li>
                    <li><NavLink to= "/contact-me" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >CONTACT ME</NavLink></li>
                </ul>
            </div>
            <nav className={'nav'} role='navigation'>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                <li><NavLink to= "/" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >ABOUT ME</NavLink></li>
                    <li><NavLink to= "/resume" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >RESUME</NavLink></li>
                    <li><NavLink to= "/projects" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >PROJECTS</NavLink></li>
                    <li><NavLink to= "/contact-me" exact activeStyle={{ fontWeight: 600, color: 'rgb(57, 110, 255)' }} style={{ textDecoration: 'none', color : 'black' }} >CONTACT ME</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
     );
}
 
export default navbar;