import React from "react";
import "/src/assets/SASS/HeroSections.scss";
import { Link } from "react-router-dom";

// importing images because its not loading in github otherwise
import heroImage from "../../../images/nail-image-01.svg"


function HeroSection() {
  return (
    <section className="wrapper">
      <div className="container hero-parent">
        <div className="hero-card">
          <h1 className="herocard-title">Online Classes</h1>
          <p className="herocard-text">
            Join our education and learn the path in becoming a nail technician
            and much more at low cost.
          </p>
          <Link to="/courses">
            <button className="btn">Join Us</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            className=""
            src={heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
