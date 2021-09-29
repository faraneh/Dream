import React from 'react';
import './asoProductPage.css';

const asoProductPage = (props) => {
    return ( 
        <div className="asoProductPage">
            {props.productName}
        </div>
     );
}
 
export default asoProductPage;