import React from 'react';
import './asoNavbarAdBox.css';

const asoNavbarAdBox = (props) => {
    return ( 
        <div className="asoNavbarAdBox">
            <div className="asoAdImageBox" style={{backgroundImage: props.image}} />
            <div className="asoAdBoxTitle">{props.title}</div>
            <div className="asoAdMore">Click for more:</div>
        </div>
     );
}
 
export default asoNavbarAdBox;