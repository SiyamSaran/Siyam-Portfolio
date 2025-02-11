import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects","internship", "skills", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backdropFilter: "blur(12px)",
        background: scrolled
          ? "linear-gradient(135deg, rgba(26, 0, 43, 0.9), rgba(61, 0, 113, 0.9))"
          : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
        transition: "0.4s ease-in-out",
        borderBottom: scrolled ? "2px solid rgba(255, 99, 132, 0.5)" : "none",
        padding: "12px 0",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* Brand Name */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{
            fontSize: "1.8rem",
            color: "#E0A3FF",
            textShadow: "0px 0px 8px rgba(224, 163, 255, 0.8)",
            letterSpacing: "1px",
          }}
        >
          Siyam Saran M
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            transition: "0.3s ease",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              color: "#E0A3FF",
              filter: "drop-shadow(0px 0px 8px rgba(224, 163, 255, 0.8))",
            }}
          ></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {["about", "projects","internship", "skills", "contact"].map((section) => (
              <li className="nav-item px-3 position-relative" key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50} // Adjusts scrolling position
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: activeSection === section ? "#E0A3FF" : "#fff",
                    fontWeight: activeSection === section ? "bold" : "normal",
                    textShadow:
                      activeSection === section
                        ? "0px 0px 12px rgba(224, 163, 255, 0.8)"
                        : "none",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    paddingBottom: "8px",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}

                  {/* Animated Underline Effect */}
                  {activeSection === section && (
                    <motion.div
                      style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "0",
                        width: "100%",
                        height: "3px",
                        background: "#E0A3FF",
                        borderRadius: "10px",
                      }}
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
