import React from "react";

function Navbar() {
  return (
    <header className="mycontainer">
      <input type="text" className="hidden" />
      <nav className="flex justify-between items-center">
        <ul className="flex items-center">
          <div>
            <img
              src="./src/assets/images/logo.svg"
              alt="logo image"
              className=""
            />
          </div>
          <div className="hidden tablet:flex">
            <li className="p-3 hover:text-accent transition">
              <a href="#">Home</a>
            </li>
            <li className="p-3 hover:text-accent transition">
              <a href="#">Products</a>
            </li>
            <li className="p-3 hover:text-accent transition">
              <a href="#">Courses</a>
            </li>
            <li className="p-3 hover:text-accent transition">
              <a href="#">About Us</a>
            </li>
          </div>
        </ul>
        <ul className="flex items-center">
          <li className="p-3 hover:text-accent transition">
            <button href="#">
              <img src="./src/assets/images/user-circle.svg" alt="" />
            </button>
          </li>
          <li className="p-3 hover:text-accent transition">
            <button href="#">
              <img src="./src/assets/images/search.svg" alt="" />
            </button>
          </li>
          <li className="p-3 hover:text-accent transition">
            <button href="#">
              <img src="./src/assets/images/shopping-bag.svg" alt="" />
            </button>
          </li>
          <li className="p-3 hover:text-accent transition tablet:hidden">
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
