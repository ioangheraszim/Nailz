import React from "react";
import online from "../../../images/online-classes.svg";
import {Link} from "react-router-dom"
function OnlineClasses() {
  return (
    <section className="container">
      <div className="parent-container">
        <div className="text-container">
          <h2 className="">
            <span className="">Online</span> Classes
          </h2>
          <p className="">
            Elevate your nail game with our online nail technician classes. From
            the basics to advanced techniques, we'll guide you every step of the
            way. Join us and turn your passion into a profession!
          </p>
          <Link to="/courses">
            <button className="btn">Join Now</button>
          </Link>
        </div>
        <div className="image-container">
          <img
            className="classes-image"
            src={online}
            alt="Online Classes Image"
          />
        </div>
      </div>
    </section>
  );
}

export default OnlineClasses;
