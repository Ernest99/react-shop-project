import React from 'react'
import './error.css'
import '../index.css'
import Nav from './Nav'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Nav/>
      <div className="error_container">
        <div className="error_text">
            <h1>404</h1>
            <h3>You have found a page that doesn't exist</h3>
            <p>Breath in and out, go back and try again</p>
            <Link to="/" className='error_btn'>Back To Home</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Error
