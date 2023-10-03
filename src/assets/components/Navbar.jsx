import React, { useState, useEffect, useContext } from "react";
import "../SASS/Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShoppingContext";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const location = useLocation();

  const { cartItems } = useContext(ShopContext);

  const totalCartItems = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  // Closes the mobile menu when the route changes
  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };
  return (
    <header className="container header">
      <input
        type="text"
        className={`searchbar ${searchToggle ? "active" : ""}`}
      />
      <nav className="navbar">
        <ul className="navigation">
          <Link to="/">
            <img
              src="/src/assets/images/logo.svg"
              alt="logo image"
              className="logo-image"
            />
          </Link>
          <ul className={`anchor-list ${toggle ? "active" : ""}`}>
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/products">Products</Link>
            </li>
            <li className="">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="">
              <Link to="/products">About Us</Link>
            </li>
          </ul>
        </ul>
        <ul className="interactions">
          <li className="">
            <button href="#">
              <img src="/src/assets/images/user-circle.svg" alt="" />
            </button>
          </li>
          <li className="">
            <button onClick={handleSearchToggle} href="#">
              <img src="/src/assets/images/search.svg" alt="" />
            </button>
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <button className="parent-btn">
                <img src="/src/assets/images/shopping-bag.svg" alt="" />
                <div className={`child-btn ${totalCartItems === 0 ? "" : "active"}`}>
                {totalCartItems === 0 ? '' : totalCartItems}
                </div>
              </button>
            </Link>
          </li>
          <li className="menu">
            <button onClick={handleToggle} href="#">
              <img
                src={`${
                  !toggle
                    ? "/src/assets/images/menu.svg"
                    : "/src/assets/images/icon-close.svg"
                }`}
                alt=""
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
