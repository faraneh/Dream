import React, { Component } from 'react';
import './mainPage.css';
import MainPageBody from '../../components/mainPage/mainPageBody/mainPageBody';
import { Route, Switch } from 'react-router-dom';
import Resume from '../../components/resume/resume';
import ContactMe from '../../components/contactMe/contactMe';
import Projects from '../../components/projects/projects';
import Todolist from '../../components/projectComponents/todolist/todoList';
import TravelBlog from '../../components/projectComponents/travelBlog/travelBlog';
import ArtShop from '../../components/projectComponents/artShop/artShop';
import MythCast from '../../components/projectComponents/mythCast/mythCast';

class MainPage extends Component {
    state = { }
    render() { 
        return ( 
            <div className={'MainPage'}>
                <Switch>
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/todolist" component={Todolist} />
                    <Route path="/travel-blog" component={TravelBlog} />
                    <Route path="/myth-cast" component={MythCast} />
                    <Route path="/art-shop" component={ArtShop} />
                    <Route path="/contact-me" component={ContactMe} />
                    <Route path="/" exact component={MainPageBody} />
                </Switch>
            </div>
         );
    }
}
 
export default MainPage;