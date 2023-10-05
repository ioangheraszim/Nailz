import React, { useContext } from "react";
import { ShopContext } from "../context/ShoppingContext";
import ProductCard from "../components/ProductCard";

function Search() {
  const { searchResults } = useContext(ShopContext);
  
  return (
    <section className="container">
      <div className="card-container">
        {searchResults.map((result) => {
          return <ProductCard key={result.id} {...result} />;
        })}
      </div>
    </section>
  );
}

export default Search;
