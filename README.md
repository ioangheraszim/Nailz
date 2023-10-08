# Nailz: Your Ultimate Nail Beauty and Education Hub

Welcome to the Nailz README, your comprehensive guide to our e-commerce platform specializing in nail products and nail art courses. Explore our offerings, discover your inner nail artist, and embark on a journey to nail perfection with us!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Welcome to Nailz, a solo frontend project dedicated to the world of nail beauty and education. This project is a personal endeavor to create a captivating and user-friendly e-commerce website that focuses exclusively on nail products and online/offline nail art courses.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size ✔️
- See hover states for all interactive elements on the page ✔️
- Be able to navigate to different pages ✔️
- Be able to pass product data to description data page ✔️
- Be able to pass product data into cart by pressing on the add to cart button ✔️
- Be able to render the product data in the cart page ✔️
- Add items to the Cart ✔️
- Remove items from the Cart ✔️
- Render the total items in cart on the Cart bag ✔️
- Style no items in cart ✔️
- Add a back to shopping button in cart to go back to products page or home screen ✔️
- Add some courses in the productsdata file and render them on the courses page ✔️
- Add a filter to help filter the products and also filter the course types (online/offline) ✔️
- Search function to help search for products from productsdata file ✔️

### Screenshot

- Desktop Screenshots
<p float="left">
  <img src="./src/assets/images/DesktopScreen.png" />
</p>

## My process

I started building this website first by using Figma to design each individual page separately, first by starting with desktop and then moving on to mobile. As I progressed, I found myself refining certain design elements on-the-fly to ensure mobile responsiveness.

Transitioning from design to code, I broke down each aspect of the design into reusable components and meticulously styled them to align with the original design vision. However, when it came to navigating between different pages in React, I initially faced a hurdle. After doing some research and thanks to certain websites I found on Google and video tutorials, I discovered React Router Dom. With its help, I seamlessly integrated the ability to navigate to various project pages.

With the navigation sorted, I focused on perfecting the styling across all pages and components required for this project. My journey then led me to the challenge of transferring data from one page to another using React Router Dom. Thankfully, I stumbled upon the useParams hook, which turned out to be a vital tool. It allowed me to pass essential data, encapsulated within card components, to other pages for a more detailed product description.

As my project evolved, a new challenge emerged - implementing a shopping cart. Gratefully, I discovered a tutorial that provided invaluable guidance. In the process, I became acquainted with the useContext hook, which significantly streamlined my code, enhancing maintainability and readability. This helped me efficiently manage the shopping cart functionality, bringing my project to a polished and functional state.

Here is a code snippet where i use the useContext hook to implement the cart functionality

```js
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
  // Calculate the total amount of items in the cart.
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Find the item info based on its ID in a productsdata array.
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
}
```

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What i learned

- <b>React Router Dom</b>: Implementing navigation between different pages within a React application was made possible thanks to React Router Dom. This library allowed me to create a seamless and dynamic user experience by easily managing routes and page transitions.

- <b>useParams Hook</b>: To transfer data between pages, I explored and employed the useParams hook. This hook proved essential in passing specific information, such as product details, from one page to another, enabling the creation of in-depth product descriptions.

- <b>useContext Hook</b>: When it came to managing the shopping cart functionality, the useContext hook became an invaluable asset. It simplified state management and made it significantly easier to handle and share data across various components. This resulted in cleaner and more efficient code.

These newfound skills and tools not only helped me overcome challenges in this project but also enhanced my overall proficiency in React development.

### Useful resources

- [Youtube PedroTech](https://www.youtube.com/watch?v=tEMrD9t85v4&t=1s&ab_channel=PedroTech) - PedroTech's YouTube tutorial was a big help for my project. It explained <b>useContext</b> and walked me through adding the cart feature. 

## Author

- Website - [Ioan Gheraszim](https://github.com/ioangheraszim)
