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
          <h1>Cart is Empty</h1>
        )}
      </section>
    </>
  );
}

export default CartPage;
