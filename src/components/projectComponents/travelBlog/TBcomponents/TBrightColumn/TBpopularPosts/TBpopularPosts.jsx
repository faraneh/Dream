import React from 'react';
import './TBpopularPosts.css';
import TBSidePost from '../../TButilities/TBsidePost/TBsidePost';

const TBpopularPosts = (props) => {
    const TBposts = [...props.posts];
    return ( 
        <div className={'TBpopularPosts'}>
            <h2 className={'TBpopularHeader'}>POPULAR POSTS</h2>
            <ul className={'TBpopularList'}>
            {TBposts.map((post, index) => post.popularity === 'popular' ? <li key={index}><TBSidePost content={post} key={index} /></li> : null )}
            </ul>
            
        </div>
     );
}
 
export default TBpopularPosts;