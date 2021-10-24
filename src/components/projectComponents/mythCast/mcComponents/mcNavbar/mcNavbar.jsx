import React from 'react';
import './mcNavbar.css';

const mcNavbar = (props) => {

    return ( 
        <div className="mcNavbar">
            <div className="mcLogo"><h1>MythCast</h1></div>
            <div className="mcNavbarLinks">
                <ul>
                    <li>Episodes</li>
                    <li>Blog</li>
                    <li>About me</li>
                    <li>Contact me</li>
                </ul>
            </div>
        </div>
     );
}
 
export default mcNavbar;