import React from "react";

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
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Products</a>
            </li>
            <li className="">
              <a href="#">Courses</a>
            </li>
            <li className="">
              <a href="#">About Us</a>
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
