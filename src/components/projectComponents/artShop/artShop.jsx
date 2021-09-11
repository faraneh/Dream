import React, { Component } from 'react';
import './artShop.css';
import Navbar from '../../navbar/navbar';
import MainPageFooter from '../../mainPage/mainPageFooter/mainPageFooter';
import AsoMainPage from './asoContainers/asoMainPage/asoMainPage';

class ArtShop extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ArtShop">
                <Navbar className={'mainPageNavbarStyle'} /> 
                <div className="resumeHeader projectBoxTitle"><div className="blueDot" style={{marginTop: 12}} /><h1>Art Shop</h1></div>
                <div className="projectBoxMargin">
                    <AsoMainPage />
                </div>
                <MainPageFooter style={{position: 'relative', height: '8rem'}} />
            </div>
         );
    }
}
 
export default ArtShop;