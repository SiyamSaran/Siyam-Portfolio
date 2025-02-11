import React, { useState } from "react";
import { motion } from "framer-motion";

const internships = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "Aug 2024 - Sept 2024",
    description: "Worked on live projects involving ML models for classification and automation.",
    details: "Developed AI-driven solutions, optimized ML pipelines, and enhanced data preprocessing techniques.",
    viewLink: "https://github.com/SiyamSaran/CodeAlpha" // Replace with actual link
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Oasis Infobyte",
    duration: "Aug 2024 - Sept 2024",
    description: "Built predictive analytics models and enhanced AI-driven solutions.",
    details: "Worked on time-series forecasting, EDA, and implemented regression models to optimize predictions.",
    viewLink: "https://github.com/SiyamSaran/OIBSIP" // Replace with actual link
  },
  {
    id: 3,
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    duration: "Oct 2024 - Dec 2024",
    description: "Developed AI algorithms for real-world applications, focusing on deep learning.",
    details: "Implemented neural networks using TensorFlow, explored generative AI models, and enhanced image recognition tasks.",
    viewLink: "https://springboard.infosys.com/ai-internship" // Replace with actual link
  },
];

const Internship = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="internship"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0d0d0d, #1e1e3f, #0d0d0d)",
        color: "#fff",
        textAlign: "center",
        padding: "80px 20px",
        animation: "gradientShift 10s infinite alternate ease-in-out"
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background: linear-gradient(135deg, #0d0d0d, #1e1e3f, #0d0d0d); }
            100% { background: linear-gradient(135deg, #121212, #252545, #121212); }
          }
        `}
      </style>

      <div className="container">
        <motion.h2
          className="fw-bold mb-5"
          style={{
            fontSize: "2.8rem",
            textShadow: "0 0 20px rgba(255, 255, 255, 1)",
            color: "#A899FA",
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Internships
        </motion.h2>

        <div className="row justify-content-center">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              className="col-12 col-sm-6 col-md-5 col-lg-4 d-flex flex-column align-items-center p-4"
              style={{
                margin: "20px",
                borderRadius: "18px",
                background: "rgba(30, 30, 50, 0.9)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 6px 25px rgba(168, 153, 250, 0.7)",
                transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 153, 250, 0.9)" }}
              onClick={() => toggleExpand(intern.id)}
            >
              {/* Glow Animation */}
              <motion.div
                style={{
                  position: "absolute",
                  width: "140%",
                  height: "140%",
                  background: "radial-gradient(circle, rgba(168,153,250,0.2) 10%, transparent 80%)",
                  top: "-20%",
                  left: "-20%",
                  zIndex: -1,
                  opacity: 0.6,
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <h4 className="fw-bold" style={{ color: "#EEE" }}>{intern.role}</h4>
              <h6 style={{ color: "#A899FA", fontWeight: "bold" }}>{intern.company}</h6>
              <p style={{ color: "#bbb", fontSize: "0.9rem" }}>{intern.duration}</p>
              <p style={{ color: "#ddd", fontSize: "1rem" }}>{intern.description}</p>

              {/* Expandable Details Section */}
              {expandedId === intern.id && (
                <motion.div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "12px",
                    borderRadius: "12px",
                    marginTop: "12px",
                    width: "90%",
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p style={{ color: "#fff", fontSize: "0.9rem" }}>{intern.details}</p>

                  {/* View Internship Link */}
                  <a
                    href={intern.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #A899FA, #6F42C1)",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "bold",
                      boxShadow: "0 0 10px rgba(168, 153, 250, 0.8)",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 15px rgba(168, 153, 250, 1)")}
                    onMouseLeave={(e) => (e.target.style.boxShadow = "0 0 10px rgba(168, 153, 250, 0.8)")}
                  >
                    View Internship
                  </a>
                </motion.div>
              )}

              {/* Expand Button */}
              <motion.button
                className="mt-3"
                style={{
                  padding: "10px 25px",
                  borderRadius: "25px",
                  border: "none",
                  background: "linear-gradient(135deg, #A899FA, #6F42C1)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow: "0 0 15px rgba(168, 153, 250, 0.8)",
                }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 153, 250, 1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleExpand(intern.id)}
              >
                {expandedId === intern.id ? "Show Less" : "Read More"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
