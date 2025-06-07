import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Artificialgrass from "./pages/Artificialgrass";
import Wallpaper from "./pages/Wallpaper";
import Louvers from "./pages/Louvers";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/artificial-grass" element={<Artificialgrass />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          <Route path="/louvers" element={<Louvers />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
