import React, { Component } from 'react';
import './mainPage.css';
import Navbar from '../../components/navbar/navbar';
import MainPageFooter from '../../components/mainPage/mainPageFooter/mainPageFooter';
import MainPageBody from '../../components/mainPage/mainPageBody/mainPageBody';
import { Route, Switch } from 'react-router-dom';
import Resume from '../../components/resume/resume';
import ContactMe from '../../components/contactMe/contactMe';
import Projects from '../../components/projects/projects';
import Todolist from '../../components/projectComponents/todolist/todoList';

class MainPage extends Component {
    state = { }
    render() { 
        return ( 
            <div className={'MainPage'}>
                {/* there is a fixed navbar */}
                <Navbar />
                {/* relative body with contents */}
                {/* <MainçPageBody /> */}
                <Switch>
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/todolist" component={Todolist} />
                    <Route path="/contact-me" component={() => <ContactMe />} />
                    <Route path="/" exact component={MainPageBody} />
                </Switch>
                {/* and absolute footer */}
                <MainPageFooter />
            </div>
         );
    }
}
 
export default MainPage;