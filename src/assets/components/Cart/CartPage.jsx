import React, { useContext } from "react";
import "../../SASS/Cart.scss";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import productsdata from "../../scripts/productsdata";
import { ShopContext } from "../../context/ShoppingContext";

function CartPage() {
  const { cartItems, totalCartAmount } = useContext(ShopContext);
  const totalAmount = totalCartAmount();
  const products = productsdata.map((item) => {
    if (cartItems[item.id] !== 0) {
      return <CartItem key={item.id} {...item} />;
    }
  });

  return (
    <>
      <section className="container">
        {products}
        {totalAmount > 0 ? (
          <>
            <div className="total-card">
              <p className="total-p">Total:</p>
              <p className="price-p">${totalAmount}</p>
            </div>
            <CartCheckout />
          </>
        ) : (
          <div className="image-parent">
            <img
              className="found-image"
              src="https://media.istockphoto.com/id/1352766190/vector/shopaholic-woman-running-with-an-empty-shopping-cart.jpg?s=612x612&w=0&k=20&c=2f0fEX7DqmYbkgY1l5w2-GLwCmLMTFLASnW-UyiPaX4="
              alt=""
            />
            <div className="image-child">
              <h1>Your cart is currently empty</h1>
              <div className="link-back">
                <button className="btn">Go back to shopping</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CartPage;
