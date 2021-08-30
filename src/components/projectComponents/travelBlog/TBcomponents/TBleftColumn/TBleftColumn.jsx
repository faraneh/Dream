import React from 'react';
import './TBleftColumn.css';
import TBMainPost from '../TButilities/TBmainPost/TBmainPost';

const TBleftColumn = (props) => {

    const TBposts = [...props.posts];
    const TBcurrentPage = props.currentPage;

    return ( 
        <div className={'TBleftPart'} style={{display: props.leftColumnDisplay}} >
            <div className={'TBLeftColumn'} >
            {TBposts.map((post, index) => (Math.floor(index / 3) + 1) === TBcurrentPage ? <TBMainPost content={post} key={index} postClicked={() => props.postClicked(index)} /> : null)}
            </div>
            <div className="TBleftColumnPagination">
                <ul className={'TBpaginationList'} >
                    <li className={'TBpaginationItem'} onClick={() => props.onPrev()} style={{width: 100}}  key={'prevv'} >Previous</li>
                    {TBposts.map((el, index) => index % 3 === 0 ? <li className={(index/3 + 1) === TBcurrentPage ? 'TBpaginationItem TBactivePag' : 'TBpaginationItem'} key={index} onClick={() => props.onClick(index / 3)} >{index/3 + 1}</li> : null )}
                    <li className={'TBpaginationItem'} key={'nextt'} onClick={() => props.onNext()} style={{width: 100}} >Next</li>
                </ul>
            </div>
        </div>
     );
}
 
export default TBleftColumn;