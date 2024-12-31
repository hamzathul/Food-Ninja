import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => setShowPopup(true);

  useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100
    });
    AOS.refresh()
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar handlePopup={handlePopup} />
        <Hero />
        <Banner />
        <WhyChooseUs />
        <About handlePopup={handlePopup} />
        <Banner />
        <Footer />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  );
}

export default App;
