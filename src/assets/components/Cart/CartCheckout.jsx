import React from "react";

import visa from "../../images/image-7.svg"
import paypal from "../../images/image-8.svg"
import apple from "../../images/image-9.svg"
import google from "../../images/image-10.svg"
function CartCheckout() {
  return (
    <>
      <div className="checkout-container">
        <div className="co-title">
          <h2>Check out</h2>
          <div className="co-form">
            <div className="info-labels">
              <div>
                <label className="" htmlFor="">
                  First Name
                </label>
                <input className="" type="text" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="email-input">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="" />
            </div>
          </div>
        </div>
        <div className="payment-card">
          <div>
            <h2>Choose Payment Method</h2>
          </div>
          <div className="co-payment">
            <div className="card-pt left-card">
              <img
                className="payment-img"
                src={visa}
                alt=""
              />
            </div>
            <div className="card-pt left-card">
              <img
                className="payment-img"
                src={paypal}
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src={apple}
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src={google}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
