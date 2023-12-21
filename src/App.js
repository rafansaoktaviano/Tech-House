import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nav from "./components/Nav/Nav";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import OurTeams from "./pages/OurTeams/OurTeams";
import ContactUs from "./pages/ContactUs/ContactUs";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ourteams" element={<OurTeams />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
