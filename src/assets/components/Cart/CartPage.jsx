import React from "react";
import "../../SASS/Cart.scss";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar";
import Footer from "../Footer";

function CartPage() {
  return (
    <>
      <Navbar />
      <section className="container">
        <CartItem />
        <CartTotal />
        <CartCheckout />
      </section>
      <Footer />
    </>
  );
}

export default CartPage;
