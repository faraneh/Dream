import React from 'react';
import './resume.css';

const resume = () => {
    return ( 
        <div className="resume">
            <div className="resumeHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Resume</h1></div>
            <div className="resumeNextLine"><h2 className={"resumeSubTitle"} style={{margin: 0}}>Experience</h2><button className={'btn1'} style={{width: 200, fontSize: "0.9rem", padding: 0}}>DOWNLOAD CV</button></div>
            <div className="resumeBox resumeOne">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis exercitationem? Autem ex accusamus, cupiditate praesentium esse quis libero, asperiores, animi alias qui quos cum odio laboriosam cumque placeat commodi voluptas nobis quidem facere incidunt. Perferendis incidunt laudantium ipsum at optio nam, doloribus esse possimus architecto, mollitia dolor debitis vitae ratione impedit doloremque accusantium aspernatur rem natus? Pariatur earum quo aperiam voluptatum dolores corrupti laborum? Quaerat rerum a rem illum consectetur ab, illo voluptate veniam expedita, asperiores corrupti aliquid. Optio architecto placeat et debitis pariatur quia repellendus corrupti? Laudantium quidem aperiam eius, tempora est unde impedit delectus ab. Necessitatibus, vitae.</p>
            </div>
            <div className="resumeBox resumeTwo">
                <ul>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                </ul>
            </div>
            <h2 className={"resumeSubTitle"}>Education</h2>
            <div className="resumeBox resumeThree">
                <ul>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt,</li>
                </ul>
            </div>
            <div className="resumeBox resumeFour">
                <ul>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                    <li style={{margin: '5px 0 15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis est sunt, non iste excepturi reiciendis repudiandae quisquam accusamus ipsum! Recusandae rerum nihil perspiciatis laboriosam id atque pariatur quo saepe!</li>
                </ul>
            </div>
        </div>
     );
}
 
export default resume;