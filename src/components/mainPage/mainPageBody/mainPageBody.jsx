import React from 'react';
import './mainPageBody.css'
import personalImage from '/Users/farane/Documents/Codes/dream-GITHUB/src/assets/images/personalImage.jpg';

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