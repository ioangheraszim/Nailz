import React from "react";
import "/src/assets/SASS/OfflineClasses.scss";
import {Link} from "react-router-dom"
// importing images because its not loading in github otherwise
import offline from "../../../images/offline-classes.svg"

function OfflineClasses() {
  return (
    <section className="container">
      <div className="parent-container second">
        <div className="text-container">
          <h2 className="">
            <span className="">Offline</span> Classes
          </h2>
          <p className="">
            Master the art of nails in person! Join our nail technician classes
            for hands-on learning, from basics to advanced techniques. Start
            your journey to becoming a certified nail technician with us.
          </p>
          <Link to="/courses">
            <button className="btn">Book Now</button>
          </Link>
          
        </div>
        <div className="image-container">
          <img
            className="classes-image"
            src={offline}
            alt="Online Classes Image"
          />
        </div>
      </div>
    </section>
  );
}

export default OfflineClasses;
