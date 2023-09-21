import React from "react";
import "/src/assets/SASS/Description.scss";
function Description() {
  return (
    <section className="container">
      <div className="desc-wrapper">
        <div className="image-container">
          <img src="https://m.media-amazon.com/images/I/710YpyO4muL._AC_UF894,1000_QL80_.jpg" alt="product image" />
        </div>
        <div className="item-desc">
          <h2 className="title-text">Gel Nail Polish Set</h2>
          <div className="info-text">
            <p className="price-text">$39.99</p>
            <ul className="stars">
              <li><img src="./src/assets/images/star.svg" alt="star image" /></li>
              <li><img src="./src/assets/images/star.svg" alt="star image" /></li>
              <li><img src="./src/assets/images/star.svg" alt="star image" /></li>
              <li><img src="./src/assets/images/star.svg" alt="star image" /></li>
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
          <p className="item-description">
            Introducing our exquisite Rose Gold Manicure Set, the epitome of
            elegance and functionality. Crafted with precision and style in
            mind, this luxurious set includes all the essential tools for a
            flawless manicure. Each tool features a stunning rose gold finish,
            combining aesthetics with durability. Elevate your nail care routine
            and achieve salon-quality results from the comfort of your home with
            this opulent manicure set. Whether you're a professional nail
            technician or a self-care enthusiast, the Rose Gold Manicure Set is
            your passport to perfectly manicured nails.
          </p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Description;
