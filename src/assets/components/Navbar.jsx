import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="container">
      <input type="text" className="hidden" />
      <nav className="">
        <ul className="">
          <div className="">
            <img
              src="./src/assets/images/logo.svg"
              alt="logo image"
              className=""
            />
          </div>
          <div className="">
            <li className="">
              <Link to="/"> Home </Link>              
            </li>
            <li className="">
              <Link to="/productspage">Products</Link>
            </li>
            <li className="">
              <Link to="/productspage">Products</Link>
            </li>
            <li className="">
              <Link to="/productspage">Products</Link>
            </li>
          </div>
        </ul>
        <ul className="r">
          <li className="">
            <button href="#">
              <img src="./src/assets/images/user-circle.svg" alt="" />
            </button>
          </li>
          <li className="">
            <button href="#">
              <img src="./src/assets/images/search.svg" alt="" />
            </button>
          </li>
          <li className="">
            <button href="#">
              <img src="./src/assets/images/shopping-bag.svg" alt="" />
            </button>
          </li>
          <li className="">
            <button href="#">
              <img src="./src/assets/images/menu.svg" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
