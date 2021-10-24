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
            {
                name: 'Art Shop',
                description: 'This project is only first page of an e-commerce, made by react. as it has sample products its kept in local state, but in short future the complete project will be uploaded here with dynamic product input and multi pages.',
                imageURL: 'https://images.unsplash.com/photo-1597816131251-a916004358c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
                componentName: '/art-shop',
            },
            {
                name: 'Travel blog',
                description: 'This One-page website is made 100% with Reactjs components, as its only a template, post datas has been saved in internal states.',
                imageURL: 'https://images.unsplash.com/photo-1587132117816-061b35073a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3880&q=80',
                componentName: '/travel-blog',
            },
            {
                name: 'Myth Cast',
                description: 'The MythCast is designed in Figma and created with reactjs :',
                imageURL: 'https://images.unsplash.com/photo-1632965053530-2475c7b91f58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2656&q=80',
                componentName: '/myth-cast',
            }
        ],
     }
    render() { 
        const stateArray =[...this.state.projectList]
        return ( 
            <div className={"projects"}>
            <Navbar className={'mainPageNavbarStyle'} />
                <div className="projectsHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Projects</h1></div>
                {stateArray.map(project => 
                    <ProjectBox name={project.name} description={project.description} image={project.imageURL} pathName={project.componentName} key={project.name} />
                )}
                <p style={{fontSize: 20, width: '100%', marginBottom: 250}}>New projects will be uploaded soon ;)</p>
                <MainPageFooter style={{position: 'relative', height: '8rem', marginTop: 100}} />
            </div>
         );
    }
}
 
export default Projects;