import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShoppingContext";
import "/src/assets/SASS/Description.scss";
import productsdata from "../scripts/productsdata";
import starImage from "../images/star.svg";
import NotFound from "./NotFound";

function Description() {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const { id } = useParams();
  const product = productsdata.find((product) => product.id === id);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <section className="container">
        <div className="desc-wrapper">
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="item-desc">
            <h2 className="title-text">{product.title}</h2>
            <div className="info-text">
              <p className="price-text">${product.price}</p>
              <ul className="stars">
                <li>
                  <img src={starImage} alt="star image" />
                </li>
                <li>
                  <img src={starImage} alt="star image" />
                </li>
                <li>
                  <img src={starImage} alt="star image" />
                </li>
                <li>
                  <img src={starImage} alt="star image" />
                </li>
              </ul>
            </div>
            <div className="buttons-tab">
              <button onClick={() => addToCart(product.id)}>
                <img src="/public/images/arrow-up.svg" alt="arrow up" />
              </button>
              <p>{cartItems[id] <= 0 ? "1" : cartItems[id]}</p>
              <button onClick={() => removeFromCart(product.id)}>
                <img src="/public/images/arrow-down.svg" alt="arrow down" />
              </button>
            </div>
            <p className="item-description">{product.description}</p>
            <button onClick={() => addToCart(product.id)} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
