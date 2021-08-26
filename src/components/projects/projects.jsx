import React, { Component } from 'react';
import './projects.css';
import ProjectBox from './projectBox/projectBox';


class projects extends Component {
    state = {
        projectList:[
            {
                name: 'Todo List',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut? Ipsum, architecto. Rem amet libero corrupti! Quia ipsum explicabo ipsam soluta, ullam unde voluptatibus placeat ratione. Itaque earum nostrum saepe!',
                imageURL: 'https://images.unsplash.com/photo-1610641564155-8ea9845579dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                componentName: '/todolist',
            },
            {
                name: 'Resto',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut? Ipsum, architecto. Rem amet libero corrupti! Quia ipsum explicabo ipsam soluta, ullam unde voluptatibus placeat ratione. Itaque earum nostrum saepe!',
                imageURL: 'https://images.unsplash.com/photo-1508403233766-d611abbd37c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                componentName: '/projects/Resto',
            },
            {
                name: 'Travel blog',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ut? Ipsum, architecto. Rem amet libero corrupti! Quia ipsum explicabo ipsam soluta, ullam unde voluptatibus placeat ratione. Itaque earum nostrum saepe!',
                imageURL: 'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                componentName: '/projects/TravelBlog',
            }
        ],
     }
    render() { 
        const stateArray =[...this.state.projectList]
        return ( 
            <React.Fragment>
            <div className={"projects"}>
                <div className="projectsHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Projects</h1></div>
                {stateArray.map(project => 
                    <ProjectBox name={project.name} description={project.description} image={project.imageURL} pathName={project.componentName} />
                )}
            </div>
            </React.Fragment>
         );
    }
}
 
export default projects;