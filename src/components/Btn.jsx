import React from 'react'
import './header.css'
const Btn = ({text,className}) => {
  return (
    <div>
        <a href="/shop" className={className}>{text}</a>
    </div>
  )
}

export default Btn