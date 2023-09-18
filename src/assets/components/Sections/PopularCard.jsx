import React from 'react'
import "/src/assets/SASS/PopularCard.scss"
import { Link } from 'react-router-dom'
function PopularCard() {
  return (
    <section className="container">
    <h2 className="popular-title">
      Most <span>Popular</span> Products
    </h2>
    {/* Card Container */}
    <div className="card-container">
      {/* Card Element */}
      <div className="product-card">
        <Link to="/">
          <img
            className="product-image"
            src="./src/assets/images/image-product.svg"
            alt="product image"
          />
          <div className="ratings">
            <img src="./src/assets/images/star.svg" alt="star image" />
            <p>(4.5)</p>
          </div>
          <p>Rose Gold Manicure Set</p>
        </Link>        
        <div className="price-wrapper">
          <p className="price-text">$39.99</p>
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div>      
      <div className="product-card">
        <Link to="/">
          <img
            className="product-image"
            src="./src/assets/images/image-product.svg"
            alt="product image"
          />
          <div className="ratings">
            <img src="./src/assets/images/star.svg" alt="star image" />
            <p>(4.5)</p>
          </div>
          <p>Rose Gold Manicure Set</p>
        </Link>        
        <div className="price-wrapper">
          <p className="price-text">$39.99</p>
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div>      
      <div className="product-card">
        <Link to="/">
          <img
            className="product-image"
            src="./src/assets/images/image-product.svg"
            alt="product image"
          />
          <div className="ratings">
            <img src="./src/assets/images/star.svg" alt="star image" />
            <p>(4.5)</p>
          </div>
          <p>Rose Gold Manicure Set</p>
        </Link>        
        <div className="price-wrapper">
          <p className="price-text">$39.99</p>
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div>      
      <div className="product-card">
        <Link to="/">
          <img
            className="product-image"
            src="./src/assets/images/image-product.svg"
            alt="product image"
          />
          <div className="ratings">
            <img src="./src/assets/images/star.svg" alt="star image" />
            <p>(4.5)</p>
          </div>
          <p>Rose Gold Manicure Set</p>
        </Link>        
        <div className="price-wrapper">
          <p className="price-text">$39.99</p>
          <button className="btn btn-cart">Add to Cart</button>
        </div>
      </div>      
    </div>
    </section>
  )
}

export default PopularCard