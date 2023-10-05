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

function ShoppingContext({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filteredSearch = productsdata.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    setSearchResults(filteredSearch); // Update searchResults with the filtered data
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    searchQuery,
    setSearchQuery,
    handleSearch,
    searchResults, // Include searchResults in the context
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShoppingContext;