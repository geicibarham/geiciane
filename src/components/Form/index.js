

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import css from './form.css'
import Nav from '../nav/nav';
import Footer from '../footer';
import formImg from '../../assets/images/form-img.jpg'
import { Placeholder } from 'react-bootstrap';
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isActive, setIsActive] = useState(false);
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

  const handleClick = event => {
    // 👇️ toggle isActive state on click
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
          <form action="">
            <h3 id="talk">Let's Talk!</h3>




            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
              onClick={handleClick}>
              <input type="text" placeholder="name" class="form-control" />
            </div>

            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
            >
              <input type="text" placeholder="e-mail" class="form-control" />
            </div>
            <div class="form-holder"
              className={isActive ? 'form-holder active' : 'form-holder'}
            >

              <input type="text" placeholder="Message" class="form-control" style={{
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