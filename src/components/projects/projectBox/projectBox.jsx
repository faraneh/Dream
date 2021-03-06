import React from 'react';
import './projectBox.css';
// import TravelBlog from '../../projectComponents/travelBlog/travelBlog';
import { Link } from 'react-router-dom';

const projectBox = (props) => {

    const pathNameAdd = props.pathName;

    return ( 
        <div className={"projectBox"}>
            <div className="projectBoxLeft">
                <div className="projectBoxLeftHeader">
                <Link to={pathNameAdd} style={{width: '100%', margin: 0, padding: 0, display: 'flex'}}>
                    <div className="projectBoxLeftHeaderBlue"/>
                        <div className="projectBoxLeftHeaderTitle">
                                {props.name}
                        </div>
                        </Link>
                    </div>
                    
                <div className="projectsDescription">
                    {props.description}
                </div>
            </div>
            <div className="projectBoxRight"><Link to={pathNameAdd}>
                     <img src={props.image} alt={'projectImage'}/>
                 </Link>
            </div>
        </div>
     );
}

export default projectBox;