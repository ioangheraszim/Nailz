import Navbar from "./assets/components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-cardcolor wrapper">
          <div className="mycontainer hero-container">
            <div className="absolute info-card">
              <h1 className="font-montserrat pl-[56px] text-[48px] font-[700]">
                Online Classes
              </h1>
              <p className="text-[14px] pl-[56px] text-left w-[450px] mb-5">
                Join our education and learn the path in becoming a nail
                technician and much more at low cost.
              </p>
              <button className="btn btn-hero">Join Us</button>
            </div>
            <div className="bg-cardcolor">
              <img
                className="animate-fade-in-right bg-cardcolor min-w-full ml-32"
                src="./src/assets/images/nail-image-01.svg"
                alt="hero image"
              />
            </div>
          </div>
        </section>
        {/* Most Popular Products */}
        <section className="mycontainer my-10">
          <h2 className="tablet:text-[40px] mobile:text-[25px] text-[36px] font-bold">
            Most <span className="text-primary">Popular</span> Products
          </h2>
          {/* Card Container */}
          <div className="my-10 desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-6 transition grid ">
            {/* Card Element */}
            <div className="p-3 rounded-lg shadow-2xl">
              <img
                className="rounded-lg"
                src="./src/assets/images/image-product.svg"
                alt="product image"
              />
              <div className="flex pt-4">
                <img src="./src/assets/images/star.svg" alt="star image" />
                <p className="ml-2 text-bold">(4.5)</p>
              </div>
              <p className="py-2">Rose Gold Manicure Set</p>
              <div className="flex justify-between items-center py-3">
                <p className="">$39.99</p>
                <button className="btn btn-add">Add to Cart</button>
              </div>
            </div>
            {/* Card Element */}
            <div className="p-3 rounded-lg shadow-2xl">
              <img
                className="rounded-lg"
                src="./src/assets/images/image-product.svg"
                alt="product image"
              />
              <div className="flex pt-4">
                <img src="./src/assets/images/star.svg" alt="star image" />
                <p className="ml-2 text-bold">(4.5)</p>
              </div>
              <p className="py-2">Rose Gold Manicure Set</p>
              <div className="flex justify-between items-center py-3">
                <p className="">$39.99</p>
                <button className="btn btn-add">Add to Cart</button>
              </div>
            </div>
            {/* Card Element */}
            <div className="p-3 rounded-lg shadow-2xl">
              <img
                className="rounded-lg"
                src="./src/assets/images/image-product.svg"
                alt="product image"
              />
              <div className="flex pt-4">
                <img src="./src/assets/images/star.svg" alt="star image" />
                <p className="ml-2 text-bold">(4.5)</p>
              </div>
              <p className="py-2">Rose Gold Manicure Set</p>
              <div className="flex justify-between items-center py-3">
                <p className="">$39.99</p>
                <button className="btn btn-add">Add to Cart</button>
              </div>
            </div>
            {/* Card Element */}
            <div className="p-3 rounded-lg shadow-2xl">
              <img
                className="rounded-lg"
                src="./src/assets/images/image-product.svg"
                alt="product image"
              />
              <div className="flex pt-4">
                <img src="./src/assets/images/star.svg" alt="star image" />
                <p className="ml-2 text-bold">(4.5)</p>
              </div>
              <p className="py-2">Rose Gold Manicure Set</p>
              <div className="flex justify-between items-center py-3">
                <p className="">$39.99</p>
                <button className="btn btn-add">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Online Classes */}
        <section className="mycontainer my-16 flex items-center border">
          <div className="w-[50%] p-5">
            <h2 className="text-[40px] font-bold mb-5">
              <span className="text-primary">Online</span> Classes
            </h2>
            <p className="my-10 max-w-[385px]">
              Elevate your nail game with our online nail technician classes.
              From the basics to advanced techniques, we'll guide you every step
              of the way. Join us and turn your passion into a profession!
            </p>
            <button className="btn py-2 px-5">Join Now</button>
          </div>
          <div className="w-[50%]">
            <img
              className="rounded-lg"
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
