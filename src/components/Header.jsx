import React from 'react'
import './header.css'
import Nav from './Nav'
import Btn from './Btn'
import Bounce from 'react-reveal/Bounce';
import Items from './Items';



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
      <section>
        <div className="container">
<div className="box">
    <h2>Women</h2>
    <h3>Classic 22</h3>
    <div className="overlay"></div>
</div>
<div className="box">
    <h2>Men</h2>
    <h3>Spring 2022</h3>
    <div className="overlay"></div>
</div>
<div className="box">
    <h2>Accessories</h2>
    <h3>New Trend</h3>
    <div className="overlay"></div>
</div>
        </div>
      </section>
      <section>
        <h2 className='item_head'>PRODUCT OVERVIEW</h2>
        <Items/>
      </section>
    </>
  )
}

export default Header
