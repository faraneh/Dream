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
                    placeholder: "",
                },
                placeholder: "Your Name:",
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
                    placeholder: "",
                },
                placeholder: "Your E-mail:",
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
                    placeholder: "",
                },
                placeholder: "The Subject:",
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
                    placeholder: "",
                },
                placeholder: "Your Message:",
                value: '',
                validation: { 
                    required: true,
                },
                valid: false,
                touched: false,
            },
        },
        formIsValid: false,
        emailIsNotValid: 'false',
        formDisplay: 'none',
        messageDisplay: 'block',
    }

    componentDidMount () { 
        this.setState({formDisplay : 'block', messageDisplay : 'none'});
    }

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     checkValidity(value, rules) { 
         let isValid = false;
        if(rules.required) { 
            isValid = value.trim() !== '';
        }
        return isValid;
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

        this.setState({contactMe : updatedContactMeForm, formIsValid : formIsValid});
     }


     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
     contactMeHandler = async (event) => {
        event.preventDefault();

        let testEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailValidation = testEmail.test(this.state.contactMe.email.value);
        let emailConflict = !emailValidation;
        await this.setState({ emailIsNotValid : emailConflict });
        let contactMemailValidationFinal = !this.state.emailIsNotValid;

        
        if(this.state.formIsValid && contactMemailValidationFinal) { 
            

             const message = {
                name : this.state.contactMe.name.value,
                email : this.state.contactMe.email.value,
                subject : this.state.contactMe.subject.value,
                message : this.state.contactMe.message.value,
             }

             emailjs.sendForm('service_6tf9us4', 'template_xw5g8ld', event.target , 'user_KMoTiil2oiOhxeTrud4K9')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
    
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
                this.setState({contactMe : contactMeState, formIsValid : false, emailIsNotValid : false, formDisplay : 'none', messageDisplay : 'block'});
  
            } else {
                let contactMeCopy = this.state.contactMe;
                contactMeCopy.email.valid = false;
                contactMeCopy.email.touched = true;
                this.setState({contactMe : contactMeCopy})
                return;
            }
     }
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     contactMeResetHandler = (event) => {
         const contactMeState = {...this.state.contactMe};
         contactMeState.name.value = '';
         contactMeState.email.value = '';
         contactMeState.subject.value = '';
         contactMeState.message.value = '';
         this.setState({contactMe : contactMeState});
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() { 
        const formElementsArray = [];
        for(let key in this.state.contactMe) { 
            formElementsArray.push({
                id: key,
                config: this.state.contactMe[key],
            });
        }
        
        let emailAlertDisplay = 'none';
        if(this.state.emailIsNotValid === true) { 
            emailAlertDisplay = 'block';
        }

        let display1 = this.state.formDisplay;
        let display2 = this.state.messageDisplay;
        

        return ( 
            <div className="contactMe">
            <Navbar className={'mainPageNavbarStyle'} /> 
            <div className="contactMeHeader"><div className="blueDot" style={{marginTop: 12}} /><h1>Let's talk</h1></div>
                <div className="contactMeForm"  style={{display : display1}}>
                    <form style={{width: '100%'}} onSubmit={() => this.contactMeHandler()} onReset={this.contactMeResetHandler} >
                        {formElementsArray.map(formElement => (
                            <ContactMeInput 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                invalid={!formElement.config.valid}
                                touched={formElement.config.touched}
                                contactMeChanged={(event) => this.inputContactMeChangedHandler(event, formElement.id)}
                                name={formElement.id}
                                emailConfirmation={this.contactMeEmailConfirmation}
                                emailRedAlert={emailAlertDisplay}
                                title={formElement.config.placeholder} />
                        ))}
                        <button type="submit" className={this.state.formIsValid ? 'btn1' : 'btn2'} disabled={!this.state.formIsValid}>SEND</button>
                        <button type="reset" className={'btn2'}>CLEAR</button>
                        <div><p style={{display: emailAlertDisplay}}>Please revise your email input</p></div>
                    </form>
                </div>
                <div className="contactMeThankYou" style={{display : display2}}>
                    <h2 style={{color: 'rgb(57, 110, 255)', fontWeight: '800', marginBottom: 50}}>THANK YOU !</h2>
                    <p style={{fontWeight: '300', fontSize: '1.1rem'}}>I just received your message. Thank you very much for writing to me. I will respond to you very soon</p>
                    <p style={{fontWeight: '300', fontSize: '1.1rem'}}>Please check your email-box for the confirmation email.</p>
                </div>
                <MainPageFooter style={{position: 'relative'}} />
            </div> 
         );
    }
}
 
export default ContactMe;