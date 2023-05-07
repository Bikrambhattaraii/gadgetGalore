import React from 'react';
import "./product.css";

export default function Product(props) {
  return (
    <div className='card'>
        <img src={props.image} />
        <h1>{props.name}</h1>
        <p className='price'>{props.price}</p>
        <p>{props.description}</p>
        <button>add to cart</button>
      
    </div>
  )
}


