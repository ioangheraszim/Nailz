import React, { useContext } from "react";
import { ShopContext } from "../../context/ShoppingContext";
import upArrow from "../../images/arrow-up.svg";
import downArrow from "../../images/arrow-down.svg";

function CartItem({ id, title, price, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="cart-wrapper">
        <div className="product-wrapper">
          <div className="left-cart">
            <div className="img-div">
              <img
                className="product-image"
                src={`${image}`}
                alt="product image "
              />
            </div>
            <div className="text-div">
              <div className="product-title">
                <p>{title}</p>
              </div>
              <div className="price-qty">
                <p>${price}</p>
              </div>
            </div>
          </div>
          <div className="qty-info">
            <div className="buttons-tab">
              <button onClick={() => addToCart(id)}>
                <img src={upArrow} alt="arrow up" />
              </button>
              <p>{cartItems[id]}</p>
              <button onClick={() => removeFromCart(id)}>
                <img src={downArrow} alt="arrow down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
