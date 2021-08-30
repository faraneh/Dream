import React from 'react';
import './contactMeInput.css';

const contactMeInput = (props) => {

    let inputElement = null;
    const contactMeInputClasses = ['InputElement'];
    const contactMeInputClassesTxtArea = [...contactMeInputClasses, 'contactMeTextarea'];
    const label = props.title;

    if(props.invalid && props.touched) { 
        contactMeInputClasses.push('Invalid');
    }
    if(props.emailAlertDisplay === "block" && props.key === 'email') { 
        contactMeInputClasses.push('Invalid');
    }

    switch (props.elementType) { 
        case ('input'):
            inputElement = <input 
                {...props.elementConfig} 
                className={contactMeInputClasses.join(' ')} 
                value={props.value}
                onChange={props.contactMeChanged}
                name={props.name} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                {...props.elementConfig} 
                className={contactMeInputClassesTxtArea.join(' ')} 
                cols={2} 
                value={props.value}
                onChange={props.contactMeChanged}
                name={props.name} />;
            break;
        default: 
            inputElement = <input 
                {...props.elementConfig} 
                className={contactMeInputClasses} 
                value={props.value}
                onChange={props.contactMeChanged}
                name={props.name} />;
            break;
    }

    return ( 
        <React.Fragment>
            <div className={'contactMeInput'}>
                <h5 className={"contactMeInputTitle"}>{label}</h5>
                {inputElement}
            </div>
        </React.Fragment>
        
     );
}
 
export default contactMeInput;