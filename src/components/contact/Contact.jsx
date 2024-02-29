import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import CC from '../../assets/ContactCard.pdf'
import { MdContactEmergency } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y8v13ae', 'template_ua3u0km', form.current, 'lc5LMt9P3CWcP9Zei')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>choubeyswasti@gmail.com</h5>
            <a href='mailto:choubeyswasti@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Swasti Choubey</h5>
            <a href='https://www.linkedin.com/in/swasti-choubey/' target='_blank'>View Profile</a>
          </article>
          <article className="contact__option">
            <MdContactEmergency className='contact__option-icon' />
            <h4>Contact Card</h4>
            <h5>Swasti Choubey</h5>
            <a href={CC} download>Download Card</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email Address' required />
          <textarea name='message' rows='7' placeholder='Say hi! 👋' />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact