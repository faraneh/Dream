import React from 'react';
import './TBmainPost.css';

const TBmainPost = (props) => {

    return ( 
        <div className={'TBmainPost'}>
            <div className="TBpostImage" style={{backgroundImage: props.content.image}} />
            <h3>{props.content.title}</h3>
            <p>{props.content.desc}</p>
            <div className="TBwhiteBottom">
                <button className={'TBreadMoreButton'} style={{color: '#628A76'}} onClick={() => props.postClicked()}>READ MORE</button>
            </div>
        </div>
     );
}
 
export default TBmainPost;