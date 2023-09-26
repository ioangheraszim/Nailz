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
            <div className="card-pt">
              <img
                className="payment-img"
                src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png"
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png"
                alt=""
              />
            </div>
            <div className="card-pt">
              <img
                className="payment-img"
                src="https://lh3.googleusercontent.com/frPbBfyjNNNGAGT93LKGESTJXjVW8Y3aI5-rTW4uiIHldMgCsEOlx14GZ20mzK5nOznS-H2fWNyv-UpaEOTuDMOc-frsyTXlu2W4"
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
