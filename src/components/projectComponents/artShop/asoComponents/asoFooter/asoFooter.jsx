import React from 'react';
import './asoFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const asoFooter = () => {
    return ( 
        <div className="asoFooter">
            <div className="asoFooterCols">
                <div className="asoFooterFirst">
                    <ul>
                        <li style={{fontWeight: '700', fontSize: '1.15rem'}}>Collections</li>
                        <li>Bedroom</li>
                        <li>Dining Room</li>
                        <li>Living Room</li>
                        <li>Kids Furniture</li>
                        <li>Office</li>
                    </ul>
                </div>
                <div className="asoFooterSecond">
                    <ul>
                        <li style={{fontWeight: '700', fontSize: '1.15rem'}}>Navigate</li>
                        <li>Search</li>
                        <li>Journal</li>
                        <li>Our Story</li>
                        <li>Contact Us</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="asoFooterThird">
                    <ul>
                        <li style={{fontWeight: '700', fontSize: '1.15rem'}}>Information</li>
                        <li>How to Pay</li>
                        <li>Shipping and Pickups</li>
                        <li>Returns and Warranty</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="asoFooterForth">
                    <p style={{fontWeight: '700', fontSize: '1.15rem'}}>Follow us</p>
                    <div className="asoSMBox">
                        <div className="asoSM asoF"><FontAwesomeIcon icon={faFacebookF} size="2x" style={{margin: 8}} /></div>
                        <div className="asoSM asoT"><FontAwesomeIcon icon={faTwitter} size="2x" style={{margin: 8}} /></div>
                        <div className="asoSM asoP"><FontAwesomeIcon icon={faPinterest} size="2x" style={{margin: 8}} /></div>
                        <div className="asoSM asoI"><FontAwesomeIcon icon={faInstagram} size="2x" style={{margin: 8}} /></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default asoFooter;