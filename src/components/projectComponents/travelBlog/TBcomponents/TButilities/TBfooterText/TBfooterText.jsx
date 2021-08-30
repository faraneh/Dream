import React from 'react';
import './TBfooterText.css';

const TBfooterText = (props) => {

    const TBpost = props.contentTxt;

    return ( 
        <div className="TBfooterText">
            <div className="TBfooterTxtTitle">{TBpost.title} </div>
            <div className="TBfooterTxtdate">{TBpost.date}</div>
        </div>
     );
}
 
export default TBfooterText;