import React from 'react'
import Nav from './Nav'
import './contact.css'
import * as BsIcon from 'react-icons/bs'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <Nav/>
        <div className="contact">
        <h1>#CONTACT</h1>
        </div>
        <section>
          <div className="contact_container">
            <div className="contact_l">
           <div className="box">
            <BsIcon.BsMessenger/>
            <h3>Messenger</h3>
            <h5>Alpha Store</h5>
           </div>
           <div className="box">
            <BsIcon.BsWhatsapp/>
            <h3>WhatsApp</h3>
            <h5>0265429443</h5>
           </div>
           <div className="box">
            <BsIcon.BsInstagram/>
            <h3>Instagram</h3>
            <h5>Alpha_Store</h5>
           </div>
            </div>
            <div className="contact_r">
              <form action="#">
                <div className="input_field">
                  <label>Name</label>
                  <input type="text" placeholder='Enter Your Name'/>
                </div>
                <div className="input_field">
                  <label>Email</label>
                  <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="input_field">
                  <label>Message</label>
                <textarea placeholder='Send a Comment' rows="4"></textarea>
                </div>
                <div className='contact_btn'>
                <button>Submit</button>
                </div>
              
              </form>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact