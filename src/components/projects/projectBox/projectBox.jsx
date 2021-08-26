import React from 'react';
import './projectBox.css';
// import TravelBlog from '../../projectComponents/travelBlog/travelBlog';
import { Link } from 'react-router-dom';

const projectBox = (props) => {

    const pathName = ['/projects' , props.pathName].join('');
    console.log(pathName);

    return ( 
        <div className={"projectBox"}>
            <div className="projectBoxLeft">
                <div className="projectBoxLeftHeader">
                    <div className="projectBoxLeftHeaderBlue"/>
                        <div className="projectBoxLeftHeaderTitle">
                                {props.name}
                        </div>
                    </div>
                
                <div className="projectsDescription">
                    {props.description}
                </div>
            </div>
            <div className="projectBoxRight"><Link to={{ 
                    pathname: {pathName},
                 }}>
                     <img src={props.image} alt={'projectImage'}/>
                 </Link>
            </div>
        </div>
     );
}

export default projectBox;