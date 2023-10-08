import React, { useState } from "react";
import productsdata from "../scripts/productsdata";
import ProductCard from "../components/ProductCard";

function Courses() {
  const [currentCourses, setCurrentCourses] = useState("course");
  const [toggleFilter, setToggleFilter] = useState(true)
  const filterToggle = () => {
    setToggleFilter(!toggleFilter)
  }

  const filterCourse = productsdata.filter((course) => {
    if (currentCourses === "course") {
      return course.category === currentCourses;
    } else {
      return course.type === currentCourses;
    }
  });

  const handleCategoryClick = (category) => {
    setCurrentCourses(category);
  };

  return (
    <>
      <main className="container">
        
        <button onClick={filterToggle} className="btn btn-filter">Filters</button>
          <div className={`filter-toggle ${toggleFilter ? "" : "active"}`}>
          <button
            className="btn"
            onClick={() => handleCategoryClick("course")}
          >
            Reset
          </button>
          <button
            className="btn"
            onClick={() => handleCategoryClick("Online Course")}
          >
            Online
          </button>
          <button
            className="btn"
            onClick={() => handleCategoryClick("Offline Workshop")}
          >
            Offline
          </button>
        </div>
        <section className="container">
          <div className="card-container">
            {filterCourse.map((course) => {
              return <ProductCard key={course.id} {...course} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Courses;
