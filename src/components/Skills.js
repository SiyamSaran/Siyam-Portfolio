import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaPython, FaGithub, FaDatabase, FaFileExcel, FaHtml5, FaRobot, FaBrain, FaChartBar } from "react-icons/fa";

const skillsData = [
  { id: 1, name: "Data Science", icon: <FaChartBar color="#FF9800" />, level: 90, color: "#FFB74D" },  // Bright orange for analytics
  { id: 2, name: "Python", icon: <FaPython color="#306998" />, level: 88, color: "#4B8BBE" },  // Deep blue for professional look
  { id: 3, name: "Generative AI", icon: <FaRobot color="#8A2BE2" />, level: 80, color: "#A970FF" },  // Electric purple for futuristic AI
  { id: 4, name: "SQL & Databases", icon: <FaDatabase color="#00C853" />, level: 75, color: "#66BB6A" },  // Green for structured data clarity
  { id: 5, name: "Machine Learning", icon: <FaBrain color="#E91E63" />, level: 75, color: "#FF80AB" },  // Pink-red for innovation & deep learning
  { id: 6, name: "HTML", icon: <FaHtml5 color="#FF5722" />, level: 75, color: "#FF8A65" }  // Vibrant red-orange for web dev
];



const Skills = () => {
  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0d0d0d, #2a2a40)",
        color: "#fff",
        textAlign: "center",
        padding: "60px 0",
        boxShadow: "0 0 25px rgba(168, 153, 250, 0.8)"
      }}
    >
      <div className="container">
        <motion.h2
          className="fw-bold mb-5"
          style={{
            fontSize: "2.5rem",
            textShadow: "0 0 20px rgba(255, 255, 255, 1)",
            color: "#A899FA"
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="row justify-content-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="col-6 col-md-5 col-lg-4 d-flex align-items-center justify-content-between p-2 skill-card"
              style={{
                margin: "8px",
                borderRadius: "15px",
                background: "rgba(30, 30, 50, 0.9)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 6px 25px rgba(168, 153, 250, 0.7)",
                transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
                minHeight: "100px"
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(168, 153, 250, 0.9)" }}
            >
              <div className="d-flex align-items-center skill-content">
                <motion.span
                  style={{
                    fontSize: "2rem",
                    marginRight: "10px",
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.6)"
                  }}
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.span>
                <h6 className="m-0" style={{ color: "#EEE", fontWeight: "bold" }}>{skill.name}</h6>
              </div>

              <div
                className="progress skill-progress"
                style={{
                  height: "6px",
                  width: "50%",
                  background: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "5px",
                  overflow: "hidden"
                }}
              >
                <motion.div
                  className="progress-bar"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, rgba(255,255,255,0.8))`
                  }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style>
        {`
          @media (max-width: 576px) {
            .skill-card {
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 12px;
              min-height: auto;
            }

            .skill-content {
              flex-direction: column;
              align-items: center;
            }

            .skill-progress {
              width: 80%;
              margin-top: 8px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
