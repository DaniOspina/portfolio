import React from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

const App = () => (
  <div>
    <Navbar />
    <div>
      <Banner />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
