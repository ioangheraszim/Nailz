import React from "react";

function CartItem() {
  return (
    <>
      <div className="cart-wrapper">
        <div className="product-wrapper">
          <div className="left-cart">
            <div className="img-div">
              <img
                className="product-image"
                src="./src/assets/images/image-product.svg"
                alt="product image "
              />
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
      </div>
    </>
  );
}

export default CartItem;
