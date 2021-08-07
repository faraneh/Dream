import React, { Component } from 'react';
import './mainPage.css';
import Navbar from '../../components/navbar/navbar';
import MainPageFooter from '../../components/mainPage/mainPageFooter/mainPageFooter';
import MainPageBody from '../../components/mainPage/mainPageBody/mainPageBody';

class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={'MainPage'}>
                {/* there is a fixed navbar */}
                <Navbar />
                {/* relative body with contents */}
                <MainPageBody />
                {/* and absolute footer */}
                <MainPageFooter />
            </div>
         );
    }
}
 
export default MainPage;