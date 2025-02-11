import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import certificate from "./Internship.pdf";

const projectData = [
  {
    id: 1,
    title: "Emotion Sentiment Analysis",
    description: "Powered by NLP and Machine Learning to identify user emotions.",
    image: "https://deana.ai/wp-content/uploads/2020/07/Top-10-AI-Chatbot-Use-Cases.jpg",
    link: certificate
  },
  {
    id: 2,
    title: "YouTube Scraping Tool",
    description: "A tool for mining and collecting YouTube video data.",
    image: "https://img.jagranjosh.com/imported/images/E/GK/data-scraping.jpg",
    link: "https://github.com/SiyamSaran/Web-Scrapping-",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "https://plus.vtc.edu.vn/wp-content/uploads/2023/02/portfoli-la-gi.jpg",
    link: "https://github.com/SiyamSaran/Siyam-Portfolio",
  },
];

const Projects = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0d0d0d, #1a1a2e, #2c2c54)",
        color: "white",
        textAlign: "center",
        minHeight: "600px",
        padding: "50px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background Effect */}
      <Particles
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: "#A899FA" },
            move: { enable: true, speed: 1 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.h2
          className="fw-bold mb-4"
          style={{
            fontSize: "2.8rem",
            color: "#A899FA",
            textShadow: "0px 0px 20px rgba(168, 153, 250, 1)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="row justify-content-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6 col-12 mb-4"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, rotateY: 0, scale: 1 },
                hidden: { opacity: 0, rotateY: -180, scale: 0.8 },
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <div
                  className="card p-3 mx-auto"
                  style={{
                    maxWidth: "320px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "rgba(30, 30, 50, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(12px)",
                    textAlign: "center",
                    boxShadow: "0px 0px 30px rgba(168, 153, 250, 0.8)",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  }}
                >
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#A899FA" }}>{project.title}</h5>
                    <p className="card-text" style={{ color: "#EEE" }}>{project.description}</p>
                    <a
                      href={project.link}
                      className="btn"
                      style={{
                        background: "linear-gradient(45deg, #7d5fb2, #A899FA)",
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        transition: "transform 0.2s ease-in-out",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Center align the projects */
            }
            .col-lg-4 {
              display: flex;
              justify-content: center; /* Ensure equal spacing */
              align-items: center;
              width: 100%; /* Make it full width on small screens */
            }
          }

          @media (max-width: 600px) {
            h2 {
              font-size: 2.2rem;
            }
            .card {
              max-width: 90%;
              padding: 15px;
            }
            .card img {
              height: 180px; /* Slightly reduce image height */
            }

            .card-body {
              padding: 10px; /* Reduce padding inside card */
             }

            .btn {
              padding: 8px 15px; /* Reduce button size */
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
