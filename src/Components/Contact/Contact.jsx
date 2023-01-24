import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';
import '../Styles/Contact.css'

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xywro9u', 'template_ikkh90j', form.current, 'STFhy9QWD0qbYdulw')
            .then((result) => {
                if (result) {
                    toast.success('Your Message send Successfully!');
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });

    }



    return (
        <section id='contact' className='section_wrapper'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option_icon' />
                        <h5>ismailjosim@yahoo.com</h5>
                        <a target={'_blank'} href="mailto:ismailjosim@yahoo.com" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerFill className='contact_option_icon' />
                        <h5>Messenger</h5>
                        <a target={'_blank'} href="https://m.me/ismailjosim99" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option_icon' />
                        <h5>whatsapp</h5>
                        <a target={'_blank'} href="https://api.whatsapp.com/send?phone+8801715052808" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' rows="7" required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;
