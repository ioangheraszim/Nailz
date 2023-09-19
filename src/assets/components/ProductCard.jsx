import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({title, price, image, rating}) {
  return (
    <div className="product-card">
        <Link to="/">
          <img
            className="product-image"
            src={`${image}`}
            alt="product image"
          />
          <div className="ratings">
            <img src="./src/assets/images/star.svg" alt="star image" />
            <p>{rating}</p>
          </div>
          <p>{title}</p>
        </Link>        
        <div className="price-wrapper">
          <p className="price-text">${price}</p>
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div> 
  )
}

export default ProductCard;