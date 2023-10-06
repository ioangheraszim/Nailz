import React, { createContext, useState } from "react";
import productsdata from "../scripts/productsdata";

export const ShopContext = createContext(null);

// function to return an empty shopping cart object
const getDefaultCart = () => {
  // initialize empty object
  let cart = {};

  productsdata.forEach((product) => {
    // adds a key value pair to the cart object initialized above
    cart[product.id] = 0;
  });
  return cart;
};

function ShoppingContext({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);


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

    if (filteredSearch.length === 0) {
      setNoResults(true); // Set noResults to true when there are no results
    } else {
      setNoResults(false); // Reset noResults if there are results
    }
  
    setSearchResults(filteredSearch);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    searchQuery,
    setSearchQuery,
    handleSearch,
    searchResults,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShoppingContext;
