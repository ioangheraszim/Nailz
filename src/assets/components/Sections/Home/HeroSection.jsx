import React from "react";
import "/src/assets/SASS/HeroSections.scss";
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
          <button className="btn">Join Us</button>
        </div>
        <div className="hero-image">
          <img
            className=""
            src="./src/assets/images/nail-image-01.svg"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
