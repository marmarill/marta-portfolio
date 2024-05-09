import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ihp01ka', 'template_x6fhwwd', form.current, {
        publicKey: 'ba-ZJdp5A8YXwEVMU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='flex items-center flex-col mb-8'>
        <h1>Contact me</h1>
        <div className='flex flex-row mb-8'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className='flex flex-row mb-8'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className='flex flex-row mb-8'>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input className="sendButton" type="submit" value="Send" />
      </div>
    </form>
  );
};