import React from 'react'

import Nav from './Nav'
import './login.css'
import Footer from './Footer'
const Login = () => {
  return (
    <>
    <Nav/>
    <div className="login">
<div className="login_container">
    <form action="#">
        <div className="logo login_logo">
           <h4 className='Logo'>Come On In</h4>
        </div>
        <div className="input_field">
            <label>Email</label>
            <input type="email" inputMode='email'/>
        </div><div className="input_field">
            <label>Password</label>
            <input type="password" />
        </div>
    </form>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Login