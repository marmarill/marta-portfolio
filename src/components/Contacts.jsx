import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToonShaderHatching } from 'three/examples/jsm/Addons.js';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_FORM_SERVICE_ID,
        import.meta.env.VITE_FORM_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_FORM_API_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='flex items-center flex-col mb-8'>
        <h1 className='mb-8'>Contact me</h1>
        <div className='flex flex-col content-between'>
          <div className='flex flex-row mb-8'>
            <input type="text" name="user_name" placeholder='Name' className='p-2 text-xl  text-black rounded-sm max-w-52 shadow-inner shadow-slate-600' />
          </div>
          <div className='flex flex-row mb-8'>
            <input type="email" name="user_email" placeholder='E-mail' className='p-2 text-xl text-black rounded-sm max-w-52 shadow-inner shadow-slate-600' />
          </div>
          <div className='flex flex-row mb-8 '>
            <textarea name="message" placeholder='Message' className=' p-2 text-xl text-black rounded-sm max-w-52 shadow-inner shadow-slate-600 focus: border-none' />
          </div>
        </div>
        <input type="submit" value="Send" className='cursor-pointer hover:text-slate-300 transition ease-in-out duration-300' />
      </div>
    </form>
  );
};