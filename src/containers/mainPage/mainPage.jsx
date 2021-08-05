import React, { Component } from 'react';
import MainPageBody from '../../components/mainPage/mainPageBody/mainPageBody';
import MainPageFooter from '../../components/mainPage/mainPageFooter/mainPageFooter';
import Navbar from '../../components/navbar/navbar';
import './mainPage.css';

class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <MainPageBody />
                <MainPageFooter />
            </div>
         );
    }
}
 
export default MainPage;