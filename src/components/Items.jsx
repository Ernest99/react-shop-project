import React from 'react'
import './items.css'
import {BsFilter} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import Btn from './Btn'
import img1 from '../components/assets/f1.jpg'
import img2 from '../components/assets/f2.jpg'
import img3 from '../components/assets/f3.jpg'
import img4 from '../components/assets/f4.jpg'
import img5 from '../components/assets/f5.jpg'
import img6 from '../components/assets/f6.jpg'
import img7 from '../components/assets/f7.jpg'
import img8 from '../components/assets/f8.jpg'
import img9 from '../components/assets/n1.jpg'
import img10 from '../components/assets/n2.jpg'
import img11 from '../components/assets/n3.jpg'
import img12 from '../components/assets/n8.jpg'
import img13 from '../components/assets/n4.jpg'
import img14 from '../components/assets/n5.jpg'
import img15 from '../components/assets/n6.jpg'
import img16 from '../components/assets/n7.jpg'

const Items = () => {

    const data = [
        {
            id: 1,
            Img: img1,
            name: 'Nike',
            Price: 20.50


        },
        {
            id: 2,
            Img: img2,
            name: 'Nike',
            Price: 35.39
        },
        {
            id: 3,
            Img: img3,
            name: 'Nike',
            Price: 18.25
        },
        {
            id: 4,
            Img: img4,
            name: 'Nike',
            Price: 15.33
        },
        {
            id: 5,
            Img: img5,
            name: 'Nike',
            Price: 9.38
        },
        {
            id: 6,
            Img: img6,
            name: 'Nike',
            Price: 11.30
        },
        {
            id: 7,
            Img: img7,
            name: 'Nike',
            Price: 25.50
        },
        {
            id: 8,
            Img: img8,
            name: 'Nike',
            Price: 5.50
        },
        {
            id: 9,
            Img: img9,
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 10,
            Img: img10,
            name: 'Nike',
            Price: 30.35
        },
        {
            id: 11,
            Img: img11,
            name: 'Nike',
            Price: 22.30
        },
        {
            id: 12,
            Img: img12,
            name: 'Nike',
            Price: 7.99
        },
        {
            id: 13,
            Img: img13,
            name: 'Nike',
            Price: 8.42
        },
        {
            id: 14,
            Img: img14,
            name: 'Nike',
            Price: 10.05
        },
        {
            id: 15,
            Img: img15,
            name: 'Nike',
            Price: 55.33
        },
        {
            id: 16,
            Img: img16,
            name: 'Nike',
            Price: 45.15
        }
    ]
  return (
    <>
    <div className="item_section">
<div className="item_nav">
    <div className="item_link">
        <ul>
            <li><a href="/" className='underline'>All Products</a></li>
            <li><a href="/">Women</a></li>
            <li><a href="/">Men</a></li>
            <li><a href="/">Bag</a></li>
            <li><a href="/">Shoes</a></li>
            <li><a href="/">Watches</a></li>
    </ul>
    </div>
    <div className="fliter">
        <a href="/"><BsFilter className='icon'/> Filter</a>
        <a href="/"><BiSearch className='icon'/> Search</a>
    </div>
</div>
<div className="items_container">
    {
        data.map((({id,Img,name,Price})=>{
            return(
                <div className="item_box" key={id}>
                    <div className="image">
                            <img src={Img} alt={name} />
                        <div className="btn_center">
                            <Btn className="item_btn btn-shop" text="Add To Cart"/>
                        </div>
                    
                    </div>
        
        <div className="detail">
            <h4>{name}</h4>
            <AiOutlineHeart className="detail_icon"/>
        </div>
        <p>₵{Price}</p>
    </div>
            )
        }))
    } 
</div>
    </div>
    
    </>
  )
}

export default Items