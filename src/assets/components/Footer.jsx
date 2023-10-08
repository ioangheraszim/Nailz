import React from "react";
import "/src/assets/SASS/Footer.scss";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container content-wrapper">
        <div className="content-logo">
          <div className="logo-container">
            <img src="./images/logo2.svg" alt="nailz logo" />
          </div>
          <p>
            Elevate your nail game with Nailz! Explore our online and offline
            nail technician courses and shop premium nail tech products. Your
            journey to nail perfection starts here.
          </p>
          <div className="socials">
            <img src=".images/facebook.svg" alt="facebook logo" />
            <img src=".images/instagram.svg" alt="instagram logo" />
          </div>
        </div>
        <div className="content-links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="content-location">
          <h2>Location</h2>
          <p>9034 Windsor Road London WC92 0WH (541) 754-3010</p>
          <p> Nailz@mail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
