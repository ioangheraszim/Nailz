import React from "react";
import "/src/assets/SASS/OfflineClasses.scss";
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
          <button className="btn">Book Now</button>
        </div>
        <div className="image-container">
          <img
            className="classes-image"
            src="./public/images/offline-classes.svg"
            alt="Online Classes Image"
          />
        </div>
      </div>
    </section>
  );
}

export default OfflineClasses;
