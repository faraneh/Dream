import React from 'react';
import './TBfooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import TBFooterText from '../TButilities/TBfooterText/TBfooterText';

const TBfooter = (props) => {

    const TBposts = [...props.posts].slice(0, 3);
    // var images = [...props.posts];
    var TBselectedImages = [5, 6, 9, 2, 4, 12];

    // for(var i = 0; i < 6; i++) {
    //     let random = Math.floor(Math.random() * images.length);
    //     selectedImages.push(images[random].image);
    //     images.splice(random, 1);
    // }

    return ( 
        <div className={'TBfooter'}>
            <div className="TBfooterText">
                <div className="TBlogo TBfooterLogo"><FontAwesomeIcon icon={faMapMarker} /><p>My Next Trip !</p></div><br />
                <p className={'TBfooterP'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, maxime? Quia necessitatibus modi placeat repellendus dolorum tempore voluptatibus? Nisi est.</p>
                <div className="TBsocialLinks TBfooterSocialLinks">
                    <FontAwesomeIcon icon={faInstagram} className={'fa-2x'} style={{margin:'0 15px 0', color:'#628A76'}} />
                    <FontAwesomeIcon icon={faTwitter} className={'fa-2x'} style={{margin:'0 15px 0', color:'#628A76'}} />
                    <FontAwesomeIcon icon={faPinterest} className={'fa-2x'} style={{margin:'0 15px 0', color:'#628A76'}} />
                </div>
            </div>
            <div className="TBfooterNews">
                <h5 className={'TBfooterRecentNews'}>Recent News</h5>
                {TBposts.map((post, index) => <TBFooterText contentTxt={post} key={index}/>)}
            </div>
            <div className="TBfooterFeed">
            <h5 className={'TBfooterRecentNews'}>Instagram Feed</h5>
            <div className="TBinstagramFeed">
                {TBselectedImages.map((num, index) => <div className="TBinstaPost" style={{backgroundImage : props.posts[num].image, backgroundSize: 'cover'}} key={index} />)}
            </div>
            </div>
        </div>
     );
}
 
export default TBfooter;