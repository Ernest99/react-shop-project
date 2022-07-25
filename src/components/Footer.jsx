import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import Btn from './Btn'
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
                            AC271, LAASA LINK C/9, Teshie Camp 2, Accra - Ghana
                        </p>
                    </div>
                </div>
                <div className="footer_mail">
                    <h4>Newsletter</h4>
                    <div className="permalinks">
                        <input type="text" placeholder='Email'/>
                        <div className='footer_btn'>
                            <Btn text={'subcribe'} className="btn-shop"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}

export default Footer