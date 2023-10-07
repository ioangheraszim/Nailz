import React from "react";
import { Link } from "react-router-dom";
import "../SASS/NotFound.scss";

function NotFound() {
  return (
    <section className="container not-found">
      <div className="image-parent">
        <img
          className="found-image"
          src="https://beautyacademyonthemove.co.uk/images/beauty_courses/Copy_of_Model_Multi_Nails_1.jpg"
          alt=""
        />
        <div className="image-child">
          <h1>Error 404</h1>
          <h2>{`{-Page Not Found-}`}</h2>
          <div className="link-back">
            <Link to="/">Click here to return home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
