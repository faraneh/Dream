import React from 'react';
import './TBsubscribtion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'

const TBsubscribtion = (props) => {

    return ( 
        <div className={'TBsubscribtion'}>
            <FontAwesomeIcon icon={faHiking} className={'fa-5x '} style={{color: '#91AFA0', marginBottom: '10px'}} />
            <h4 className={'TBsubTitle'} style={{display: props.confirmationBtn === "THANK YOU !" ? 'none' : 'flex'}}>JOIN ME ON MY NEXT TRIP</h4>
            <input className={props.confirmationBtn !== "THANK YOU !" ? 'TBemailInput' : 'TBemailInputCon'} onChange={props.emailVerification} disabled = {props.confirmationBtn === "THANK YOU !"? "disabled" : ""}/>
            <button className={props.confirmationBtn !== "THANK YOU !" ? "TBsubConfirm" : "TBsubConfirmed"} onClick={props.emailConfirmation} >{props.confirmationBtn}</button>
            <p style={{fontSize: '0.9rem', display: props.confirmationBtn !== "THANK YOU !" ? 'none' : 'block'}}>Hooray ! you are now a member ! <br />You can check your email for more information</p>
        </div>
     );
}
 
export default TBsubscribtion;