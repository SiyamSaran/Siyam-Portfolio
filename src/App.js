import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Internship from "./components/Internship";
const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Internship />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;

