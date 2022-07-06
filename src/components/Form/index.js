

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import css from './form.css'
import Nav from '../nav/nav';
import Footer from '../footer';
import formImg from '../../assets/images/form-img.jpg'
import { Placeholder } from 'react-bootstrap';
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <>
      {/* < Nav /> */}
      <section id="outer">


        <div id="form-page">
          <div className="myForm">
            <section id="white-back">
              <h5 style={{
                textAlign: "center",
                fontWeight:"bold",
                color:"#512b73",
                marginTop:"10px"
              }}>Let's Talk!</h5>
              <form id="form" className="form-style">
                <img style={{ width: "300px", alignSelf:"start" }}
                 src={formImg} alt="girl sitting with laptop" />
                <div className='input-form'>
                  <div>
                    {/* <label htmlFor="name">Name:</label> */}
                    
                    <input placeholder="NAME"className="form-input" type="text" 
                    
                  name="name"   defaultValue={name} onBlur={handleChange} />
                 
                  </div>
                  <span class="dot"></span> 
                  <div>
                    {/* <label htmlFor="email">Email address:</label> */}
                    <input placeholder="EMAIL"className="form-input" type="email"
                    name="email" defaultValue={email} onBlur={handleChange} />
                  </div>


                  <div>
                    {/* <label htmlFor="message">Message:</label> */}
                   
                    <textarea  placeholder="MESSAGE"className="form-input" name="message" rows="5"
                     defaultValue={message} onBlur={handleChange} />
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                  <div className="submit">
                    <button id="btn-submit" className="btn btn-light form-button"
                     data-testid="button" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactForm;