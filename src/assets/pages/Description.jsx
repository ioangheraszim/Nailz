import React from "react";
import "/src/assets/SASS/Description.scss";
import { useParams } from "react-router-dom";
import productsdata from "../scripts/productsdata";
import starImage from "../images/star.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

function Description() {
  const { id } = useParams();
  const product = productsdata.find((product) => product.id === id);

  if (!product) {
    return <NotFound/>
  }

  return (
    <>
      <Navbar />
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
              <button>
                <img src="/src/assets/images/arrow-up.svg" alt="arrow up" />
              </button>
              <p>1</p>
              <button>
                <img src="/src/assets/images/arrow-down.svg" alt="arrow down" />
              </button>
            </div>
            <p className="item-description">{product.description}</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Description;
