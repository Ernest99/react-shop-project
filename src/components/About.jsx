import React from 'react'
import Nav from './Nav'
import './about.css'
import aboutImg from '../components/assets/1.jpg'
import Footer from './Footer'
import Btn from './Btn'
const About = () => {
  return (
    <div>
        <Nav/>
        <div className="about">
          <h1>#ABOUT</h1>
        </div>
        <section>
          <div className="about_section">
            <div className="about_">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about_r">
              <h1>About Us</h1>
              <div className="bio">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, nemo eveniet deserunt voluptatibus aliquam culpa excepturi inventore quidem eaque sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus culpa esse veniam sit saepe ullam repudiandae enim distinctio debitis rerum nostrum ea nulla laboriosam natus, iste exercitationem? Possimus officiis beatae quis quia quae voluptas hic nihil sint fuga vel?</p>
                <div className="about_btn">
                <Btn text={'Start Shopping Now'} className='btn-shop'/>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default About