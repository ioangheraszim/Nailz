import React, { useContext } from "react";
import { ShopContext } from "../../context/ShoppingContext";
function CartTotal() {

  const {totalCartAmount } = useContext(ShopContext)
  return (
    <>
      <div className="total-card">
        <p className="total-p">Total:</p>
        <p className="price-p">${totalCartAmount}</p>
      </div>
    </>
  );
}

export default CartTotal;
