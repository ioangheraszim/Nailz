import React from "react";
import "../../SASS/Cart.scss";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import CartTotal from "./CartTotal";

function CartPage() {
  return (
    <>
      <section className="container">
        <CartItem />
        <CartTotal />
        <CartCheckout />
      </section>
    </>
  );
}

export default CartPage;
