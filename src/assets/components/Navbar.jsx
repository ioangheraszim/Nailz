import React, { useState, useEffect, useContext } from "react";
import "../SASS/Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../context/ShoppingContext";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, handleSearch, searchQuery, setSearchQuery } =
    useContext(ShopContext);

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

  const handleSearchClick = () => {
    handleSearch(searchQuery);
    navigate("/search");
    setSearchToggle(!searchToggle);
    setSearchQuery("");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="container header">
      <div className={`search-container ${searchToggle ? "active" : ""}`}>
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          type="text"
          className="searchbar"
          placeholder="Search..."
        />

        <button onClick={handleSearchClick} className="search-btn">
          <img src="/src/assets/images/search.svg" alt="search button" />
        </button>
      </div>
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
              <img src="/src/assets/images/user-circle.svg" alt="user button" />
            </button>
          </li>
          <li className="">
            <button onClick={handleSearchToggle} href="#">
              <img src="/src/assets/images/search.svg" alt="search button" />
            </button>
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <button className="parent-btn">
                <img
                  src="/src/assets/images/shopping-bag.svg"
                  alt="cart button"
                />
                <div
                  className={`child-btn ${
                    totalCartItems === 0 ? "" : "active"
                  }`}
                >
                  {totalCartItems === 0 ? "" : totalCartItems}
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
