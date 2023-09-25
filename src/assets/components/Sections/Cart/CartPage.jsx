import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../../SASS/Cart.scss"

function Cart() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="cart-wrapper">
          <div className="product-wrapper">
            <div className="left-cart">
              <div className="img-div">
                <img className="product-image" src="./src/assets/images/image-product.svg" alt="product image " />
              </div>
              <div className="text-div">
                <div className="product-title">
                  <p>Rose Gold Manicure Set</p>
                </div>
                <div className="price-qty">
                  <p>$39.99</p>
                </div>
              </div>
            </div>
            <div className="qty-info">
              <div className="buttons-tab">
                <button>
                  <img src="/src/assets/images/arrow-up.svg" alt="arrow up" />
                </button>
                <p>1</p>
                <button>
                  <img src="/src/assets/images/arrow-down.svg" alt="arrow down" />
                </button>
              </div>
            </div>
          </div>

          <div className="checkout-container">
            <div className="co-title">
              <h2>Check out</h2>
              <div className="co-form">
                <div className="info-labels">
                  <div>
                    <label className="" htmlFor="">First Name</label>
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
            <h2>Choose Payment Method</h2>
            <div className="payment-card">
              <div className="co-payment">
                <div className="card-pt">
                  <img className="payment-img" src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png" alt="" />
                </div>
                <div className="card-pt">
                  <img className="payment-img" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" alt="" />
                </div>
                <div className="card-pt">
                  <img className="payment-img" src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png" alt="" />
                </div>
                <div className="card-pt">
                  <img className="payment-img" src="https://lh3.googleusercontent.com/frPbBfyjNNNGAGT93LKGESTJXjVW8Y3aI5-rTW4uiIHldMgCsEOlx14GZ20mzK5nOznS-H2fWNyv-UpaEOTuDMOc-frsyTXlu2W4" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
