import React from 'react';
import './contactMeInput.css';

const contactMeInput = (props) => {

    let inputElement = null;
    const contactMeInputClasses = ['InputElement'];
    const contactMeInputClassesTxtArea = [...contactMeInputClasses, 'contactMeTextarea'];

    if(props.invalid && props.touched) { 
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
        <div className={'contactMeInput'}>
            <label className={'Label'}>{props.label}</label>
            {inputElement}
        </div>
     );
}
 
export default contactMeInput;