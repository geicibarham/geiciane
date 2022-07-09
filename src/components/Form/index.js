

import React, { useEffect,useState, useRef } from 'react';

import { validateEmail } from '../../utils/helpers';
import css from './form.css'
import Nav from '../nav/nav';
import Footer from '../footer';
import formImg from '../../assets/images/form-img.jpg'
import emailjs from 'emailjs-com'
import coding from '../../assets/images/coding.png'


function ContactForm() {
  const form = useRef();

  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('')
  const [icon, setIcon] = useState('')


  function track () {
    setIcon(coding)
    setMessage(<span>Thank you for contacting me. <br />I will reply as soon as possible!</span>)
    
  }

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

            <p  style={{color:"#52297c"}}>
           
              {message } <img height={"40px"} src= {icon} /></p>

       
              
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
         
              <button onClick={track}
              
              
              id="btn-submit" className="btn btn-light" data-testid="button" type="submit">Send</button>
              
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;