import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/' className='Logo'><span>ALPHA</span> STORE</Link>
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