import React from 'react';
import './TBrightColumn.css';
import TBAboutMe from '../../TBrightColumn/TBaboutMe/TBaboutMe';
import TBAdvertisement from '../TBadvertisement/TBadvertisement';
import TBPopularPosts from '../TBpopularPosts/TBpopularPosts';
import TBSubscribtion from '../TBsubscribtion/TBsubscribtion';

const TBrightColumn = (props) => {

    return ( 
        <div className={'TBRightColumn'}>
            <TBAboutMe />
            <TBPopularPosts posts={props.posts} />
            <TBAdvertisement />
            <TBSubscribtion emailVerification={props.emailVerification} inputValue={props.inputValue} emailConfirmation={props.emailConfirmation} confirmationBtn={props.confirmationBtn} />
        </div>
     );
}
 
export default TBrightColumn;