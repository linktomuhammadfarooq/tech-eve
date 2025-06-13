import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import PastWork from "./components/PastWork";
import SoftwareLifecyle from "./components/SoftwareLifecyle";
import AboutUs from "./components/AboutUs";
import CoreTechnologies from "./components/CoreTechnologies";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="app">
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <Header />
      </nav>

      <section>
        <HeroSection />
      </section>

      
      <section className="portfolio-section">
        <Services />
      </section>
      <section className="portfolio-section">
        <SoftwareLifecyle />
      </section>
      <section className="portfolio-section">
        <PastWork />
      </section>
      <section className="portfolio-section">
        <CoreTechnologies />
      </section>
      <section className="portfolio-section">
        <AboutUs />
      </section>
      <section className="portfolio-section">
        <ContactUs />
      </section>
      {/* Add other sections */}
    </div>
  );
}

export default App;
