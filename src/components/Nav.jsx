import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsCartFill} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import './nav.css'
const Nav = () => {
  return (
    <>
    <nav>
        <div className="nav_l">
<a href="/" className='logo'><span>ALPHA</span> STORE</a>
<ul className="nav_links">
    <li><a href="/" className='active'>Home</a></li>
    <li><a href="/shop">Shop</a></li>
    <li><a href="/feature">Feature</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>
    
        </div>
        <div className="nav_r">
            <div className="nav_icons">
                <button><BiSearchAlt2/></button>
                <button><BsCartFill/></button>
                <button><BsFillHeartFill/></button>
                <button><FaUserCircle/></button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav