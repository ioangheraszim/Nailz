function ShoppingContext({ children }) {
  
  // Initialize state variables using the useState hook.
  const [cartItems, setCartItems] = useState(getDefaultCart()); // State for cart items
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results

  // Calculate the total amount of items in the cart.
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Find the item info based on its ID in the productsdata array.
        const itemInfo = productsdata.find((product) => product.id === itemId);
        // Calculate the total price for this item and add it to the total amount.
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }
    // Round the total amount to two decimal places and return it.
    return Math.round(totalAmount * 100) / 100;
  };

  // Add an item to the cart.
  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] + 1,
    }));
  };

  // Remove an item from the cart.
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: prevCartItems[itemId] - 1,
      }));
    }
  };

  // Handle the search functionality by updating searchQuery and searchResults.
  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter productsdata to find items whose titles match the search query (case-insensitive).
    const filteredSearch = productsdata.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    // Update the searchResults state with the filtered search results.
    setSearchResults(filteredSearch);
  };

  // Create a contextValue object containing all the data and functions needed by child components.
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

  // Render a context provider with the contextValue and pass the children as its content.
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
