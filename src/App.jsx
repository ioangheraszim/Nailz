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
              <button className="btn btn-hero">
                Join Us
              </button>
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
          <h2 className="text-[40px] font-bold">Most <span className="text-primary">Popular</span> Products</h2>
          {/* Card Container */}
          <div className="my-10 p-5 border md:grid-cols-4 sm:grid-cols-2 transition border-red-500 grid gap-4 grid-cols-1">
            {/* Card Element */}
            <div className="p-3 rounded-lg shadow-2xl">
              <img className="rounded-lg" src="./src/assets/images/image-product.svg" alt="product image" />
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
              <img className="rounded-lg" src="./src/assets/images/image-product.svg" alt="product image" />
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
              <img className="rounded-lg" src="./src/assets/images/image-product.svg" alt="product image" />
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
              <img className="rounded-lg" src="./src/assets/images/image-product.svg" alt="product image" />
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
        <section></section>
        {/* Information */}
        <section></section>
        {/* CTA Offline Classes */}
      </main>
      {/* Footer */}
      <footer></footer>
    </>
  );
}
