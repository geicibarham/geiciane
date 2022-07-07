

import React, { useState, useRef } from 'react';

import { validateEmail } from '../../utils/helpers';
import css from './form.css'
import Nav from '../nav/nav';
import Footer from '../footer';
import formImg from '../../assets/images/form-img.jpg'
import emailjs from 'emailjs-com'

function ContactForm() {
  const form = useRef();
  // const [formState, setFormState] =
  //   useState({ name: '', email: '', message: '' });
  // const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_gi9f1ys', 
    'template_zybg72b', form.current,
     'tjWNs6WMdJZ0tz0Y5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
   
    
      // .send(
      //   'service_gi9f1ys',
      //   'template_zybg72b',
      //   formState,
      //   'tjWNs6WMdJZ0tz0Y5'
      // )
      
    
  


  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <>
      < Nav />
      <div class="wrapper">
        <div class="inner">
          <div class="image-holder">
            <img src={formImg} alt="" />
          </div>
          <form ref={form}
           onSubmit={handleSubmit} action="">
            <h3 id="talk">Let's Talk!</h3>
            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
              onClick={handleClick}>

              <input type="text"
                // onChange={handleChange}
                name="name"
                placeholder="name"
                class="form-control" />
            </div>

            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
            >
              <input type="email"
                name="email"
              
                placeholder="e-mail"
                // onChange={handleChange}
                class="form-control" />
            </div>
            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
            >

              <input type="text"
                name="message" placeholder="Message"
             
                // onChange={handleChange}
                class="form-control" style={{
                  fontSize: "15px",
                  height: "120px"
                }} />
            </div>
            <div className="submit">
              <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;