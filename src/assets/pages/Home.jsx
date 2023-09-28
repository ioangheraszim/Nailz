import React from "react";
import HeroSection from "../components/Sections/Home/HeroSection";
import PopularCard from "../components/Sections/Home/PopularCard";
import OnlineClasses from "../components/Sections/Home/OnlineClasses";
import OfflineClasses from "../components/Sections/Home/OfflineClasses";
import Information from "../components/Sections/Home/Information";

function Home() {
  return (
    <>
      <main className="">
        <HeroSection />
        <PopularCard />
        <OnlineClasses />
        <Information />
        <OfflineClasses />
      </main>
    </>
  );
}

export default Home;
