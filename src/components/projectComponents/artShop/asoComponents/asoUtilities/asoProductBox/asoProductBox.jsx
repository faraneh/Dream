import React from 'react';
import './asoProductBox.css';

const asoProductBox = (props) => {

    let asoProductPrice = ''
    if(props.fullPrice == 0) { 
        asoProductPrice = <p>${props.price}</p>
    } else { 
        asoProductPrice = <p style={{color: 'grey'}}><s>${props.fullPrice}</s> <br /> <span style={{color: 'black', fontWeight: 600}}>${props.price}</span></p>
    }

    return ( 
        <div className="asoProductBox">
            <div className="asoProductTop">
            <img src={props.imageAdrs} style={{width: 150, height: 150}} alt="product" />
            <h3>{props.productTitle}</h3>
            <h6>{props.category}</h6>
            {asoProductPrice}
            </div>
            <div className="asoProductHoverButtons">
                <button className="asoProductBtn1 asoProductInfo">Quick Shop</button>
                <button className="asoProductBtn2 asoQuickAddToCard">Details</button>
            </div>
        </div>
     );
}
 
export default asoProductBox;