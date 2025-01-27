// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BentosSection from "./components/BentosSection";

const App = () => (
  <div>
    <Navbar />
    <div>
      {/* <AboutSection />*/}
      {/* <BentosSection /> */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
