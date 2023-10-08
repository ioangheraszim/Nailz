import React from "react";
import "/src/assets/SASS/Information.scss";

function Information() {
  return (
    <section className="container">
      <div className="info-parent">
        <div className="info-card">
          <div className="icon-container">
            <img src="./public/images/shipping.svg" alt="shipping icon" />
          </div>
          <h2>Free Shipping</h2>
          <p>
            Enjoy seamless shopping with our complimentary shipping service.
          </p>
        </div>
        <div className="info-card">
          <div className="icon-container">
            <img src="./public/images/secure.svg" alt="shipping icon" />
          </div>
          <h2>Secure Payment</h2>
          <p>
            Experience worry-free transactions with our secure payment options.
          </p>
        </div>
        <div className="info-card">
          <div className="icon-container">
            <img src="./public/images/customer.svg" alt="shipping icon" />
          </div>
          <h2>Love to help you</h2>
          <p>Our dedicated team is here to assist you every step of the way.</p>
        </div>
      </div>
    </section>
  );
}

export default Information;
