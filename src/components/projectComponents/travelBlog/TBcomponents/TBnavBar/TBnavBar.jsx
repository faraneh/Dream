import React from 'react';
import './TBnavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const TBnavBar = (props) => {
    return ( 
        <React.Fragment>
            <div className={'TBbannerBody'}>
                <div className="TBnav">
                    <div className="TBlogo"><FontAwesomeIcon icon={faMapMarker} /><p>My Next Trip !</p></div>
                    <div className="TBnavLinks">
                        <div className="TBnavLink TBHome"><p>Home</p></div>
                        <div className="TBnavLink TBAboutMe"><p>About Me</p></div>
                        <div className="TBnavLink TBContactMe"><p>Contact Me</p></div>
                    </div>
                </div>
                <div className="TBmainBannerText">
                    <h1 className="TBmainBannerTextMain">SWITZERLAND</h1>
                    <h4 className="TBmainBannerTextDesc">EXPLORE EUROPE WITH ME</h4>
                    <button className="TBbannerButton" onClick={props.navBarButtonClicked}>READ MORE</button>
                </div>
            </div>
        </React.Fragment>
        
     );
}
 
export default TBnavBar;