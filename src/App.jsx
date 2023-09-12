import Navbar from "./assets/components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cardcolor wrapper">
          <div className="container hero-container">
            <div className="absolute info-card">
              <h1 className="font-montserrat pl-[56px] text-[48px] font-[700]">
                Online Classes
              </h1>
              <p className="text-[14px] pl-[56px] text-left w-[375px] mb-5">
                Join our education and learn the path in becoming a nail
                technician and much more at low cost.
              </p>
              <button className="btn btn-hero">
                Join Us
              </button>
            </div>
            <div className="bg-cardcolor">
              <img
                className="bg-cardcolor ml-72 w-[750px] h-[450px]"
                src="./src/assets/images/nail-image-01.svg"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
