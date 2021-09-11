import React from 'react';
import './asoProductBox.css';

const asoProductBox = (props) => {
    return ( 
        <div className="asoProductBox">
            <img src={props.imageAdrs} style={{width: 150, height: 150}} alt="product" />
            <h3>{props.productTitle}</h3>
            <h6>{props.category}</h6>
            <p>${props.price}</p>
        </div>
     );
}
 
export default asoProductBox;