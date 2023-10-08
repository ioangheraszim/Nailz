import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShoppingContext";

function ProductCard({ id, title, price, image, rating }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img className="product-image" src={image} alt="product image" />
        <div className="ratings">
          <img src="./images/star.svg" alt="star image" />
          <p>({rating})</p>
        </div>
        <p>{title}</p>
      </Link>
      <div className="price-wrapper">
        <p className="price-text">${price}</p>
        <button onClick={() => addToCart(id)} className="btn btn-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
