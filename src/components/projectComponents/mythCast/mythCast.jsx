import React, { Component } from 'react';
import './mythCast.css';
import Navbar from '../../navbar/navbar';
import MainPageFooter from '../../mainPage/mainPageFooter/mainPageFooter';
import McMainPage from '../mythCast/mcContainers/mcMainPage/mcMainPage';


class MythCast extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="MythCast">
                <Navbar className={'mainPageNavbarStyle'} />
                <div className="resumeHeader projectBoxTitle mythCastHeader" ><div className="blueDot" style={{marginTop: 12}} /><h1>MythCast Podcast</h1></div>
                <div className="MCprojectBoxMargin"><McMainPage /></div>
                <MainPageFooter style={{position: 'relative', height: '8rem', marginTop: 100}} />
            </div>
         );
    }
}
 
export default MythCast;