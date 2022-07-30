import React,{useRef} from 'react'
// import {BiSearchAlt2} from 'react-icons/bi'
import {BsBagFill} from 'react-icons/bs'
// import {BsFillHeartFill} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './nav.css'



// adding background to nav when window is greater than 100
window.addEventListener('scroll', () =>{
   const nav = document.querySelector('nav')
   window.pageYOffset > 80 ? nav.classList.add('nav_bg') : nav.classList.remove('nav_bg')
})

//navigation
const Nav = () => {
const menuRef = useRef()
const menuToggle = () => menuRef.current.classList.toggle('nav_active');

  return (
    <>
    <nav>
        <div className="nav_l">
<Link to="/" className='logo'><span>ALPHA</span> STORE</Link>
<ul className="nav_links" onClick={menuToggle} ref={menuRef}>
    <li><Link to="/" className='active'>Home</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/feature">Features</Link><span>New</span></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
</ul>
    
        </div>
        <div className="nav_r">
            <div className="nav_icons">
               
                <button><BsBagFill/><span>2</span></button>
               <Link to='/signin'><button><FaUserCircle/></button></Link>
                <div className="toggle">
          <VscThreeBars className='menu' onClick={menuToggle}/>
        </div>
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Nav