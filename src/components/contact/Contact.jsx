import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <p>shobiyalakshmanan11@gmail.com</p>
            <a href='mailto:shobiyalakshmanan11@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
