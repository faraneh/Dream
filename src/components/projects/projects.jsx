import React, { Component } from 'react';
import './projects.css';
import ProjectBox from './projectBox/projectBox';
import Navbar from '../navbar/navbar';
import MainPageFooter from '../mainPage/mainPageFooter/mainPageFooter';


class Projects extends Component {
    state = {
        projectList:[
            // {
            //     name: 'Todo List',
            //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut? Ipsum, architecto. Rem amet libero corrupti! Quia ipsum explicabo ipsam soluta, ullam unde voluptatibus placeat ratione. Itaque earum nostrum saepe!',
            //     imageURL: 'https://images.unsplash.com/photo-1610641564155-8ea9845579dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            //     componentName: "/todolist",
            // },
            // {
            //     name: 'Art Shop',
            //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut? Ipsum, architecto. Rem amet libero corrupti! Quia ipsum explicabo ipsam soluta, ullam unde voluptatibus placeat ratione. Itaque earum nostrum saepe!',
            //     imageURL: 'https://images.unsplash.com/photo-1508403233766-d611abbd37c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            //     componentName: '/art-shop',
            // },
            {
                name: 'Travel blog',
                description: 'This One-page website is made 100% with Reactjs components, as its only a template, post datas has been saved in internal states. for more information please click the image :',
                imageURL: 'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                componentName: '/travel-blog',
            }
        ],
     }
    render() { 
        const stateArray =[...this.state.projectList]
        return ( 
            <React.Fragment>
            <Navbar className={'mainPageNavbarStyle'} />
            <div className={"projects"}>
                <div className="projectsHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Projects</h1></div>
                {stateArray.map(project => 
                    <ProjectBox name={project.name} description={project.description} image={project.imageURL} pathName={project.componentName} key={project.name} />
                )}
                <p style={{fontSize: 20}}>New projects will be uploaded soon ;)</p>
            </div>
            <MainPageFooter style={{position: 'relative', height: '8rem'}} />
            </React.Fragment>
         );
    }
}
 
export default Projects;