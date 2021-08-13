import React from 'react';
import './mainPageFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const mainPageFooter = (props) => {
    return ( 
        <div className={"mainPageFooter"}>
            <div className="mainPageFooterSigniture">
                <p style={{margin: 0}}>© 2021 by Farane Javadi.</p><br />
                <p style={{margin: 0}}>Proudly created in CANADA</p>
            </div>
            <div className="mainPageFooterSocialMedia">
                {/* <div className={'footerBox'}>
                    <p style={{margin: '5px 0 20px 0', fontWeight: 800}}>Call</p>
                    <p>+1-416-3005337</p>
                </div> */}
                <div className={'footerBox'}>
                    <p style={{margin: '5px 0 20px 0', fontWeight: 800}}>Write</p>
                    <p><a className={'emailLink'} href={"mailto:faraneh.javadinejad@gmail.com"}>faraneh.javadinejad@gmail.com</a></p>
                </div>
                <div className={'footerBox'}>
                    <p style={{margin: '5px 0 20px 0', fontWeight: 800}}>Follow</p>
                    <a href="https://github.com/faraneh" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faGithubSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                    <a href="https://www.linkedin.com/in/faraneh-javadinejad" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{margin: '-10px 10px 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                    <a href="https://twitter.com/faranehjn" rel = "noreferrer" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{margin: '-10px 10 0 0', color: 'rgb(59, 59, 59)'}} /></a>
                </div>
            </div>
        </div>
     );
}
 
export default mainPageFooter;