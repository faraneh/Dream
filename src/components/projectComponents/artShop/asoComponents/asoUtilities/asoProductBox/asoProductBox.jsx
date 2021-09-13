import React from 'react';
import './asoProductBox.css';

const asoProductBox = (props) => {

    let asoProductPrice = ''
    if(props.fullPrice === 0) { 
        asoProductPrice = <p>${props.price.toFixed(2)}</p>
    } else { 
        asoProductPrice = <p style={{color: 'grey'}}><s>${props.fullPrice.toFixed(2)}</s> <br /> <span style={{color: 'black', fontWeight: 600}}>${props.price.toFixed(2)}</span></p>
    }

    return ( 
        <div className="asoProductBox">
            <img src={props.imageAdrs} style={{width: 150, height: 150}} alt="product" />
            <h3>{props.productTitle}</h3>
            <h6>{props.category}</h6>
            {asoProductPrice}
        </div>
     );
}
 
export default asoProductBox;