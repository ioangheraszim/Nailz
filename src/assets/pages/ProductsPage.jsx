import React from "react";
import ProductCard from "../components/ProductCard";
import productsdata from "/src/assets/scripts/productsdata";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductsPage() {
  const theData = productsdata.map((item) => {
    return <ProductCard key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="container">
          {/* Filter */}
          <div>
            <h1>filter</h1>
          </div>
          <div className="card-container">{theData}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;
