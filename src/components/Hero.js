import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import profile from "./portfolio image.jpg";
const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour < 18) {
      setGreeting("Good Afternoon 🌤️");
    } else {
      setGreeting("Good Evening 🌙");
    }
  }, []);

  return (
    <header className="hero-container">
      {/* Animated Particles */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 120 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } },
            move: { speed: 2, direction: "random", outModes: "bounce" },
            color: { value: ["#ff00ff", "#00ffff", "#ffcc00"] },
            opacity: { value: 0.8 },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />

      {/* Animated Background Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="greeting-text">{greeting}</h2>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Siyam Saran M</span>
        </h1>

        <h3 className="hero-subtitle">
          <Typewriter
            options={{
              strings: [
                "Data Scientist 💻",
                "React Developer ⚛️",
                "Frontend Engineer 🎨",
                "Tech Enthusiast 🚀",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 90,
            }}
          />
        </h3>

        <div className="glass-card">
        <em>"The technology you use impresses no one. The experience you create with it is everything." </em> <br></br>–<strong> Sean Gerety</strong>
        </div>

        <div className="social-icons">
          {[
            {
              href: "mailto:siyampritham@gmail.com",
              icon: <FaEnvelope />,
            },
            {
              href: "https://github.com/SiyamSaran",
              icon: <FaGithub />,
            },
            {
              href: "https://linkedin.com/in/siyam-saran-m",
              icon: <FaLinkedin />,
            },
            {
              href: "https://www.instagram.com/siyam_siddharth_",
              icon: <FaInstagram />,
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Keyframes & Styles */}
      <style>
        {`
          /* Background Wave Animations */
          .wave {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            opacity: 0.5;
            animation: waveMove 10s infinite linear;
            filter: blur(8px);
          }
          .wave1 { animation-delay: 0s; }
          .wave2 { animation-delay: 2s; opacity: 0.4; }
          .wave3 { animation-delay: 4s; opacity: 0.3; }

          @keyframes waveMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          /* Hero Section */
          .hero-container {
            background: radial-gradient(circle at center, #000000, #1c1c3b, #5a189a);
            background-size: 400% 400%;
            animation: gradientShift 10s infinite ease-in-out;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .greeting-text {
            font-size: 2.5rem;
            color: #ffffff;
            text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
            animation: fadeIn 2s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .hero-title {
            font-size: 4rem;
            color: #ffffff;
            animation: slideIn 1s ease-in-out;
          }

          @keyframes slideIn {
            0% { transform: translateY(-30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          /* Neon Name Effect */
          .hero-name {
            color: #ff00ff;
            text-shadow: 0px 0px 20px rgba(255, 0, 255, 1);
            font-weight: bold;
            display: inline-block;
            transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
          }

          .hero-name:hover {
            transform: scale(1.1);
            text-shadow: 0px 0px 30px rgba(255, 0, 255, 1);
          }

          .hero-subtitle {
            color: #d8bfd8;
            font-size: 1.8rem;
            margin-top: 10px;
          }

          /* Glass Card */
          .glass-card {
            max-width: 600px;
            padding: 20px;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            color: #ffffff;
            font-size: 1.2rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
            margin: auto;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Social Icons */
          .social-icons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .social-link {
            font-size: 2rem;
            color: #ffffff;
            transition: transform 0.3s, text-shadow 0.3s;
          }

          .social-link:hover {
            transform: scale(1.2);
            text-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
          }
        `}
      </style>
    </header>
  );
};

export default Hero;
