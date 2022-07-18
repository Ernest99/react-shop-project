import React from 'react'
import './header.css'
const Btn = ({text}) => {
  return (
    <div>
        <a href="/shop" className='btn-shop'>{text}</a>
    </div>
  )
}

export default Btn