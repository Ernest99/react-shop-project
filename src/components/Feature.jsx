import React,{useState} from 'react'
import Nav from './Nav'
import './feature.css'
import fImage from '../components/assets/f4.jpg'
import Items from './Items'
import Footer from '../components/Footer'
import fImg2 from '../components/assets/f2.jpg'
import fImg5 from '../components/assets/f5.jpg'
import fImg1 from '../components/assets/f1.jpg'

const Feature = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
        <Nav/>
        <section>
        <div className="feature_container">
          <div className="f_left">
            <div className="f_img">
              <img src={fImage} alt="" />
            </div>
            <div className="gallery">
              <img src={fImg2} alt="" />
              <img src={fImg5} alt="" />
              <img src={fImage} alt="" />
              <img src={fImg1} alt="" />
            </div>
          </div>
          <div className="f_right">
            <h4>Home/T-Shirt</h4>
            <h2>Men's Zicon Top</h2>
            <h3>₵15.50</h3>
            <div className="option">
              <select>
                <option value="Select Size">Select Size</option>
                <option value="Small">S</option>
                <option value="Medium">M</option>
                <option value="Large">L</option>
                <option value="Xtra Large">XL</option>
              </select>
            </div>
            <div className="quantity">
             <div className="counter">
              <button onClick={()=>setCounter(counter - 1)}>-</button>
              <span>{counter}</span>
              <button onClick={()=>setCounter(counter + 1)}>+</button>
             </div>
              <button>Add To Cart</button>
            </div>
            <h2 className='product_details'>Product Details</h2>
            <p>The Zicon shirt checks in with an all-white rose design. This 100% cotton white short-sleeve T-shirt is highlighted by small milky flowers on the chest and is completed by a classic round neck.</p>
          </div>
        </div>
        <Items/>
        </section>
        
        <Footer/>
    
    </div>
  )
}

export default Feature