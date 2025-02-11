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
    viewLink: "https://github.com/SiyamSaran/CodeAlpha"
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Oasis Infobyte",
    duration: "Aug 2024 - Sept 2024",
    description: "Built predictive analytics models and enhanced AI-driven solutions.",
    details: "Worked on time-series forecasting, EDA, and implemented regression models to optimize predictions.",
    viewLink: "https://github.com/SiyamSaran/OIBSIP"
  },
  {
    id: 3,
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    duration: "Oct 2024 - Dec 2024",
    description: "Developed AI algorithms for real-world applications, focusing on deep learning.",
    details: "Implemented neural networks using TensorFlow, explored generative AI models, and enhanced image recognition tasks.",
    viewLink: "https://springboard.infosys.com/ai-internship"
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
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background: linear-gradient(135deg, #0d0d0d, #1e1e3f, #0d0d0d); }
            100% { background: linear-gradient(135deg, #121212, #252545, #121212); }
          }

          @media (max-width: 992px) {
            .row {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            .col-lg-4 {
              width: 90%;
              display: flex;
              justify-content: center;
            }
          }

          @media (max-width: 600px) {
            h2 {
              font-size: 2.2rem;
            }

            .card {
              max-width: 95%;
              padding: 15px;
              margin: 10px 0;
            }

            .card h4 {
              font-size: 1.3rem;
            }

            .card h6 {
              font-size: 1rem;
            }

            .card p {
              font-size: 0.9rem;
            }

            .btn {
              padding: 8px 15px;
              font-size: 0.9rem;
            }
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 153, 250, 0.9)" }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => toggleExpand(intern.id)}
            >
              <h4 className="fw-bold" style={{ color: "#EEE" }}>{intern.role}</h4>
              <h6 style={{ color: "#A899FA", fontWeight: "bold" }}>{intern.company}</h6>
              <p style={{ color: "#bbb", fontSize: "0.9rem" }}>{intern.duration}</p>
              <p style={{ color: "#ddd", fontSize: "1rem" }}>{intern.description}</p>

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
                    }}
                  >
                    View Internship
                  </a>
                </motion.div>
              )}

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
