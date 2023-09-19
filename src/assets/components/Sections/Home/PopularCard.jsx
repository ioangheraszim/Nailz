import React from "react";
import "/src/assets/SASS/PopularCard.scss";
import ProductCard from "../../ProductCard";
import popularData from "/src/assets/scripts/populardata";

function PopularCard() {
  const theData = popularData.map((item) => {
    return <ProductCard key={item.id} {...item} />;
  });

  return (
    <section className="container">
      <h2 className="popular-title">
        Most <span>Popular</span> Products
      </h2>
      {/* Card Container */}
      <div className="card-container">
        {/* Card Element */}
        {theData}
      </div>
    </section>
  );
}

export default PopularCard;
