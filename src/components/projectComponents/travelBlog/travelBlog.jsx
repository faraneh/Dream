import React, { Component } from 'react';
import'./travelBlog.css';
import TBmainPage from '../travelBlog/TBcontainer/TBmainPage';
import Navbar from '../../navbar/navbar';
import MainPageFooter from '../../mainPage/mainPageFooter/mainPageFooter';

class TravelBlog extends Component {
    state = {  }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    
    render() { 
        return ( 
            <div className="TravelBlog">
                <Navbar className={'mainPageNavbarStyle'} /> 
                <div className="resumeHeader projectBoxTitle"><div className="blueDot" style={{marginTop: 12}} /><h1>Travel Blog</h1></div>
                <div className="projectBoxMargin">
                    <TBmainPage />
                </div>
                <MainPageFooter style={{position: 'relative', height: '8rem'}} />
                </div>
         );
    }
}
 
export default TravelBlog;