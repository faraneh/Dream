import React from 'react';
import './mainPageFooter.css';

const mainPageFooter = (props) => {
    return ( 
        <div className={"mainPageFooter"}>
            <p>© 2023 by Janna.</p>
            <div className="mainPageFooterSocialMedia">
                <p style={{marginRight: 20}}>Call</p>
                <p style={{marginRight: 20}}>Write</p>
                <p style={{marginRight: 20}}>Follow</p>
            </div>
        </div>
     );
}
 
export default mainPageFooter;