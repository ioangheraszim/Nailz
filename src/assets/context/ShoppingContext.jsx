import React, { createContext, useState } from "react";
import productsdata from "../scripts/productsdata";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  productsdata.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

function ShoppingContext(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = productsdata.find((product) => product.id === itemId);
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }
    return Math.round(totalAmount * 100) / 100;
  };

  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: prevCartItems[itemId] - 1,
      }));
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShoppingContext;
