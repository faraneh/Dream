import React from 'react';
import './TBaboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const TBaboutMe = () => {
    return ( 
        <div className={'TBaboutMe'}>
            <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="PersonalImage" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt culpa doloribus reprehenderit ipsa hic est nemo dolor magnam velit?</p>
            <div className="TBsocialLinks">
            <FontAwesomeIcon icon={faInstagram} className={'fa-2x'} style={{margin:'40px 15px 0', color:'#628A76'}} />
            <FontAwesomeIcon icon={faTwitter} className={'fa-2x'} style={{margin:'40px 15px 0', color:'#628A76'}} />
            <FontAwesomeIcon icon={faPinterest} className={'fa-2x'} style={{margin:'40px 15px 0', color:'#628A76'}} />
            </div>
            <button className={'TBaboutMeIcon'}>ABOUT ME</button>
        </div>
     );
}
 
export default TBaboutMe;