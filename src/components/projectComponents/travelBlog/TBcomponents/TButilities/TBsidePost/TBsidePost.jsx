import React from 'react';
import './TBsidePost.css';

const TBsidePost = (props) => {
    const TBsideImage = props.content.image;
    const TBsideTitle = props.content.title;
    const TBsideDate = props.content.date;
    return ( 
        <div className="TBsidePost">
            <div className="TBsideImage" style={{backgroundImage: TBsideImage}} />
            <div className="TBsideTexts">
                <div className="TBsideHeader">{TBsideTitle}</div>
                <div className="TBsideDate" >{TBsideDate}</div>
            </div>
        </div>
     );
}
 
export default TBsidePost;