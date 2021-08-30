import React from 'react';
import './TBpostMoreInfo.css';

const TBpostMoreInfo = (props) => {

    const TBposts = [...props.posts];
    const TBpost = TBposts[parseInt(props.index)];
    const TBcommentList = TBpost.comments;
    const TBimages = [...props.posts[props.index].imageList];

    return ( 
        <div className={"TBpostMoreInfo"} style={{display : props.display}}>
            <div className="TBmoreInfoButtons">
            <div className="TBgoBackButton" onClick={() => props.goBack()}>BACK</div>
            <div className="TBmoreInfoArrows">
                <div className={props.postDisplayed === 0 ? "TBgoBackButtonDisactive" : "TBgoBackButton"} onClick={() => props.moreInfoGoPrev(props.postDisplayed)}>PREVIOUS</div>
                <div className={props.postDisplayed === TBposts.length - 1 ? "TBgoBackButtonDisactive" : "TBgoBackButton"} onClick={() => props.moreInfoGoNext(props.postDisplayed)}>NEXT</div>
            </div>
            </div>
            <div className="TBmoreInfoImage" style={{backgroundImage : TBpost.image}} />
            <div className="TBmoreInfoTitle">{TBpost.title}</div>
            <div className="TBmoreInfoText">{TBpost.desc}</div>
            <h4 className="TBmoreInfoCommentTitle" style={{textAlign: 'left', marginLeft: 10}}>Images I took there:</h4>
            <div className="TBimageGallery" onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} onMouseMove={props.onMouseMove} ref={props.ref} >
                {TBimages.map((el, index) => <div className="TBimageBoxImageGallery" style={{backgroundImage : 'url(' +el + ')'}} key={index} />)}
            </div>
            <div className="TBmoreInfoComment">
                <div className="TBmoreInfoCommentTitle"> Add Comment:</div>
                <div className="TBnameQ"><p className="TByourName">Your Name:</p> <input className="TBnameInput" type="name" value={props.commentName} onChange={props.commentNameAdded} /></div>
                <textarea className="TBmoreInfoCommentArea" id="comment" rows="5" cols="86" maxLength="250" value={props.commentValue} onChange={props.commentTextAdd} />
                <div className="TBgoBackButton" onClick={props.commentConfirmed}>CONFIRM</div>
                <div className="TBcommentsbox">
                    {TBcommentList.map((el, index) => <p className="TBcommentBox" key={index}>{el}</p>)}
                </div>
            </div>
        </div>
     );
}
 
export default TBpostMoreInfo;