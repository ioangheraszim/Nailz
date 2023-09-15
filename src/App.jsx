import Navbar from "./assets/components/Navbar";
import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="">
          <div className="">
            <div className="">
              <h1 className="">
                Online Classes
              </h1>
              <p className="">
                Join our education and learn the path in becoming a nail
                technician and much more at low cost.
              </p>
              <button className="">Join Us</button>
            </div>
            <div className="">
              <img
                className=""
                src="./src/assets/images/nail-image-01.svg"
                alt="hero image"
              />
            </div>
          </div>
        </section>
        {/* Most Popular Products */}
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

        {/* CTA Online Classes */}
        <section className="">
          <div className="">
            <h2 className="">
              <span className="">Online</span> Classes
            </h2>
            <p className="">
              Elevate your nail game with our online nail technician classes.
              From the basics to advanced techniques, we'll guide you every step
              of the way. Join us and turn your passion into a profession!
            </p>
            <button className="">Join Now</button>
          </div>
          <div className="">
            <img
              className=""
              src="./src/assets/images/online-classes.svg"
              alt="Online Classes Image"
            />
          </div>
        </section>
        {/* Information */}
        <section></section>
        {/* CTA Offline Classes */}
      </main>
      {/* Footer */}
      <footer></footer>
    </>
  );
}
