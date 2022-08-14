import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'
import Payment from '../components/assets/pay.png'
const Footer = () => {
  return (
    <>
    <footer>
        <section>
            <div className="footer_flex">
                <div className="category">
                    <h4>Categories</h4>
                    <div className="permalinks">
                        <ul>
                          <li><Link className='link' to="#">Women</Link></li>  
                          <li><Link className='link' to="#">Men</Link></li>  
                          <li><Link className='link' to="#">Shoes</Link></li>  
                          <li><Link className='link' to="#">Watches</Link></li>    
                        </ul>
                    </div>
                </div>
                <div className="help">
                    <h4>Help</h4>
                    <div className="permalinks">
                        <ul>
                          <li><Link className='link' to="#">Track Orders</Link></li>  
                          <li><Link className='link' to="#">Returns</Link></li>  
                          <li><Link className='link' to="#">Shippings</Link></li>  
                          <li><Link className='link' to="#">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="get_info">
                    <h4>Get In Touch</h4>
                    <div className="permalinks">
                        <p>
                        Any questions? Let us know in store at 8th floor, AC271, LAASA LINK C/9, Teshie Camp 2, Accra - Ghana or call us on <a href="tel:+233265429443"><br/>(+233) 265429443</a> 
                        </p>
                        <div className="social_media">
                            <BsIcons.BsFacebook className='footer_icon'/>
                            <BsIcons.BsInstagram className='footer_icon'/>
                            <BsIcons.BsTwitter className='footer_icon'/>
                            <BsIcons.BsPinterest className='footer_icon'/>
                        </div>
                    </div>
                </div>
                <div className="footer_mail">
                    <h4>Newsletter</h4>
                    <div className="permalinks">
                        <input type="text" placeholder='Email'/>
                        <div className='footer_btn'>
                            <button className='news_btn'>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;copyright 2022, <span>ALPHA</span> STORE</p>
               <div>
               <Link to='/'><img src={Payment} alt="" /></Link>
               </div>
            </div>
        </section>
    </footer>
    </>
  )
}

export default Footer