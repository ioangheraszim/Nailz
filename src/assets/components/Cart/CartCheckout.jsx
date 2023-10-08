import React from "react";

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
                src="src/assets/images/image-7.svg"
                alt=""
              />
            </div>
            <div className="card-pt left-card">
              <img
                className="payment-img"
                src="src/assets/images/image-8.svg"
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src="src/assets/images/image-9.svg"
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src="src/assets/images/image-10.svg"
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
