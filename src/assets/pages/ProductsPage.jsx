import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsdata from "/src/assets/scripts/productsdata";

function ProductsPage() {
  const [currentProduct, setCurrentProduct] = useState("product");

  const filteredProducts = productsdata.filter((product) => {
    if (currentProduct === "product") {
      return product.category === currentProduct;
    } else {
      return product.type === currentProduct;
    }
  });

  const handleCategoryClick = (category) => {
    setCurrentProduct(category);
  };

  return (
    <>
      <main className="container">
        <section className="container">
          <div className="card-container">
            <button className="btn" onClick={() => handleCategoryClick("product")}>
              Reset
            </button>
            <button className="btn" onClick={() => handleCategoryClick("Tools")}>
              Tools
            </button>
            <button className="btn" onClick={() => handleCategoryClick("Accessories")}>
              Accessories
            </button>
            <button className="btn" onClick={() => handleCategoryClick("Beauty")}>
              Beauty
            </button>
          </div>
          <div className="card-container">
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductsPage;
