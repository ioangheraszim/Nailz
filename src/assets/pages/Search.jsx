import React, { useContext } from "react";
import { ShopContext } from "../context/ShoppingContext";
import ProductCard from "../components/ProductCard";

function Search() {
  const { noResults, searchResults, searchQuery } = useContext(ShopContext);

  if (searchQuery.trim() === "") {
    return (
      <>
        <div className="container no-results">
          <h1 className="no-result-title">
            No results found please try again.
          </h1>
        </div>
      </>
    );
  }

  if (noResults) {
    return <h1>No results found</h1>;
  }

  if (!Array.isArray(searchResults) || searchResults.length === 0) {
    return (
      <>
        <div className="container no-results">
          <h1 className="no-result-title">
            No results found please try again.
          </h1>
        </div>
      </>
    );
  }

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
