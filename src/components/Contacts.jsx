import React, { useRef, useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function debounce(func, duration) {
  let timeout

  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}

export const Contact = () => {
  const form = useRef()
  const [isEmailSent, setIsEmailSent] = useState(false)


  const sendEmail = useCallback(debounce(() => {
    emailjs
      .sendForm(
        import.meta.env.VITE_FORM_SERVICE_ID,
        import.meta.env.VITE_FORM_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_FORM_API_KEY }
      )
      .then(
        () => {
          toast.success("Success!")
          setIsEmailSent(true)
        },
        (error) => {
          toast.warning("Something went wrong...")
        },
      )
  }, 500), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <>
      {isEmailSent ? (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl">Thank you for your message!</h1>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="relative">
          <div className='flex items-center flex-col mb-8'>
            <h1 className='leading-loose text-3xl mb-6'>Contact me</h1>
            <div className='flex flex-col content-between'>
              <div className='flex flex-row mb-8'>
                <Input type={"text"} name={"user_name"} placeholder={"Name"} />
              </div>
              <div className='flex flex-row mb-8'>
                <Input type={"email"} name={"user_email"} placeholder={"E-mail"} />
              </div>
              <div className='flex flex-row mb-8 '>
                <textarea name="message" placeholder='Message' className=' text-xl dark:text-white text-[#351212] max-w-52 
            bg-transparent box-border border-b-2 dark:border-white border-[#351212]  
            placeholder:pt-4 placeholder:pl-2 placeholder:text-[#5a5252]' />
              </div>
            </div>
            <input type="submit" value="Send" className='cursor-pointer text-xl hover:text-slate-300 transition ease-in-out duration-300' />
          </div>
        </form>
      )}
    </>
  )
}
export const Input = ({ type, name, placeholder }) =>
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className='p-2 text-xl text-[#351212] dark:text-white max-w-52 bg-transparent box-border  
    border-b-2 border-[#351212] dark:border-white placeholder:text-[#5a5252]'
  />

