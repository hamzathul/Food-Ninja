import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Banner />
        <WhyChooseUs />
        <About />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App;
