import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsdata from "/src/assets/scripts/productsdata";
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
          <h1>filter</h1>
        </section>
        <div className="card-container">
          {theData}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;
