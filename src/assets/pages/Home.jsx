import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Sections/Home/HeroSection";
import PopularCard from "../components/Sections/Home/PopularCard";
import OnlineClasses from "../components/Sections/Home/OnlineClasses";
import OfflineClasses from "../components/Sections/Home/OfflineClasses";
import Information from "../components/Sections/Home/Information";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        <PopularCard />
        <OnlineClasses />
        <Information />
        <OfflineClasses />
      </main>
      <Footer />
    </>
  );
}

export default Home;
