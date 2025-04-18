import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import JobsSection from "../components/JobsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <JobsSection />
      <Footer />
    </div>
  );
}

export default Home;
