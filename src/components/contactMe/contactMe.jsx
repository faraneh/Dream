import React, { Component } from 'react';
import './contactMe.css';
import ContactMeInput from './contactMeInput/contactMeInput';
import axios from '../../axios-orders';
import emailjs from 'emailjs-com';
import MainPageFooter from '../mainPage/mainPageFooter/mainPageFooter';
import Navbar from '../navbar/navbar';

class ContactMe extends Component {
    state = { 
        contactMe: { 
            name: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name:"
                },
                value: '',
                validation: { 
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email:  {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Your E-mail:"
                },
                value: '',
                validation: { 
                    required: true,
                },
                valid: false,
                touched: false,
            },
            subject:  {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "The Subject:"
                },
                value: '',
                validation: { 
                    required: true,
                },
                valid: false,
                touched: false,
            },
            message:  {
                elementType: 'textarea',
                elementConfig: {
                    type: "text",
                    placeholder: "Your Message:"
                },
                value: '',
                validation: { 
                    required: true,
                },
                valid: false,
                touched: false,
            },
        },
        formIsValid: false,
     }

     checkValidity(value, rules) { 
         let isValid = false;
        if(rules.required) { 
            isValid = value.trim() !== '';
        }
        return isValid;
     }

     inputContactMeChangedHandler = (event, inputIdentifier) => {
        const updatedContactMeForm = {
            ...this.state.contactMe
        };
        const updatedContactMeFormElement = {...updatedContactMeForm[inputIdentifier]};
        updatedContactMeFormElement.value = event.target.value;
        updatedContactMeFormElement.valid = this.checkValidity(updatedContactMeFormElement.value, updatedContactMeFormElement.validation);
        updatedContactMeFormElement.touched = true;
        updatedContactMeForm[inputIdentifier] = updatedContactMeFormElement;

        let formIsValid = true;
        for(let inputIdentifiers in updatedContactMeForm) { 
            formIsValid = updatedContactMeForm[inputIdentifiers].valid && formIsValid;
        }

        this.setState({contactMe: updatedContactMeForm, formIsValid : formIsValid});
     }

     contactMeHandler = (event) => {
        event.preventDefault();

        const message = {
            name : this.state.contactMe.name.value,
            email : this.state.contactMe.email.value,
            subject : this.state.contactMe.subject.value,
            message : this.state.contactMe.message.value,
        }

         axios.post('/messages.json', message)
            .then (response => {
                this.setState({eraseValues : true});
                console.log(response, message);
            })
            .catch (error => {
                this.setState({eraseValues : false});
                console.log(error, message);
            })

            const contactMeState = {...this.state.contactMe};
            contactMeState.name.value = '';
            contactMeState.email.value = '';
            contactMeState.subject.value = '';
            contactMeState.message.value = '';
            this.setState({contactMe : contactMeState, formIsValid : false});

            
            emailjs.sendForm('service_u3f4n8v', 'template_62bzl5w', event.target, 'user_KMoTiil2oiOhxeTrud4K9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
     }

     contactMeResetHandler = (event) => {
         const contactMeState = {...this.state.contactMe};
         contactMeState.name.value = '';
         contactMeState.email.value = '';
         contactMeState.subject.value = '';
         contactMeState.message.value = '';
         this.setState({contactMe : contactMeState});
     }


    render() { 
        const formElementsArray = [];
        for(let key in this.state.contactMe) { 
            formElementsArray.push({
                id: key,
                config: this.state.contactMe[key],
            });
        }

        return ( 
            <div className="contactMe">
            <Navbar className={'mainPageNavbarStyle'} /> 
            <div className="contactMeHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Let's talk</h1></div>
                <div className="contactMeForm">
                    <form style={{width: '100%'}} onSubmit={this.contactMeHandler} onReset={this.contactMeResetHandler} >
                        {formElementsArray.map(formElement => (
                            <ContactMeInput 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                invalid={!formElement.config.valid}
                                touched={formElement.config.touched}
                                contactMeChanged={(event) => this.inputContactMeChangedHandler(event, formElement.id)}
                                name={formElement.id} />
                        ))}
                        <button type="submit" className={this.state.formIsValid ? 'btn1' : 'btn2'} disabled={!this.state.formIsValid}>SEND</button>
                        <button type ="reset" className={'btn2'}>CLEAR</button>
                    </form>
                </div>
                <MainPageFooter style={{position: 'relative'}} />
            </div> 
            
         );
    }
}
 
export default ContactMe;