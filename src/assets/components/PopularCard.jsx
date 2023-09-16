import React from 'react'

function PopularCard() {
  return (
    <section className="">
    <h2 className="">
      Most <span className="text-primary">Popular</span> Products
    </h2>
    {/* Card Container */}
    <div className="">
      {/* Card Element */}
      <div className="">
        <img
          className=""
          src="./src/assets/images/image-product.svg"
          alt="product image"
        />
        <div className="">
          <img src="./src/assets/images/star.svg" alt="star image" />
          <p className="">(4.5)</p>
        </div>
        <p className="">Rose Gold Manicure Set</p>
        <div className="">
          <p className="">$39.99</p>
          <button className="">Add to Cart</button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default PopularCard