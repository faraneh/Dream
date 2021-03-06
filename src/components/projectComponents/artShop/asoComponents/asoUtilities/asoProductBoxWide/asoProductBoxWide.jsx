import React from 'react';
import './asoProductBoxWide.css';

const asoProductBoxWide = (props) => {

    let asoProductPrice = ''
    if(props.fullPrice === 0) { 
        asoProductPrice = <p>${props.price}</p>
    } else { 
        asoProductPrice = <p style={{color: 'grey'}}><s>${props.fullPrice}</s> <br /> <span style={{color: 'black', fontWeight: 600}}>${props.price}</span></p>
    }

    return ( 
        <div className="asoProductBoxWide">
                <div className="asoProductBoxWideOne">
                    <img src={props.imageAdrs} style={{width: 150, height: 150}} alt="product" />
                    <h3>{props.productName}</h3>
                    <h6>{props.category}</h6>
                </div>
                <div className="asoProductBoxWideTwo">
                    <h2>Price</h2>
                    {asoProductPrice}
                </div>
                <div className="asoProductWideHoverButtons">
                    <button className="asoProductBtn1Wide asoProductInfoWide">Edit</button>
                    <button className="asoProductBtn2Wide asoQuickAddToCardWide">Delete</button>
                </div>
        </div>
     );
}
 
export default asoProductBoxWide;