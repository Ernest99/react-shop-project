import React from 'react'
import './items.css'
import {BsFilter} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import Btn from './Btn'
const Items = () => {

    const data = [
        {
            id: 1,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33


        },
        {
            id: 2,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 3,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 4,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 5,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 6,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 7,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 8,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 9,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 10,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 11,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 12,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 13,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 14,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 15,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
        },
        {
            id: 16,
            Img: 'https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp',
            name: 'Nike',
            Price: 12.33
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
            <AiOutlineHeart/>
        </div>
        <p>{Price}</p>
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