import React from 'react'
import './header.css'
import Nav from './Nav'
import Btn from './Btn'
import Bounce from 'react-reveal/Bounce';
const Header = () => {
  return (
    <>
      <header>
        <Nav/>
        <div className="content">
            <Bounce left>
            <h3>UNISEX COLLECTION 2022</h3>
            </Bounce>
            <Bounce bottom cascade>
            <h1>NEW ARRIVALS</h1>
            </Bounce>
            <div className="btn">
                <Btn text="SHOP NOW"/>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
