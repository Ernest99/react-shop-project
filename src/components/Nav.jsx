import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsCartFill} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './nav.css'
// adding background to nav when window is greater than 100
window.addEventListener('scroll', () =>{
   const nav = document.querySelector('nav')
   window.pageYOffset > 100 ? nav.classList.add('nav_bg') : nav.classList.remove('nav_bg')
})

//navigation
const Nav = () => {
  return (
    <>
    <nav>
        <div className="nav_l">
<Link to="/" className='logo'><span>ALPHA</span> STORE</Link>
<ul className="nav_links">
    <li><Link to="/" className='active'>Home</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/feature">Features</Link><span>New</span></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
</ul>
    
        </div>
        <div className="nav_r">
            <div className="nav_icons">
                <button><BiSearchAlt2/></button>
                <button><BsCartFill/><span>0</span></button>
                <button><BsFillHeartFill/><span>2</span></button>
                <button><FaUserCircle/></button>
                <div className="toggle">
          <VscThreeBars className='menu'/>
        </div>
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Nav