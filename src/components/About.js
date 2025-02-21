import React, { useState } from "react";
import { FaProjectDiagram, FaTrophy, FaClock } from "react-icons/fa";
import profile from "./profile.jpg";
import { motion } from "framer-motion";
import resume from "./Siyam_Saran M Resume.pdf";

const About = () => {
  const [projects] = useState(3);
  const [awards] = useState(10);
  const [internships] = useState(4);

  return (
    <section id="about" style={styles.section}>
      {/* Floating Glow Effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.floatingGlow,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main Content */}
      <motion.div className="about-container" style={styles.aboutContainer}>
        {/* Text Content */}
        <div style={styles.textContent}>
          <motion.h2 className="fw-bold" style={styles.heading}>
            About Me
          </motion.h2>

          <motion.p className="lead mt-3" style={styles.description}>
            I am a <strong style={styles.highlight}>Data Scientist</strong> and{" "}
            <strong style={styles.highlight}>React Developer</strong> passionate about{" "}
            <span style={styles.highlight}>AI-powered applications</span>. I specialize in{" "}
            <strong style={styles.highlight}>
            machine learning, frontend development, and AI-driven solutions
            </strong>{" "}
            to solve real-world problems.
          </motion.p>


          {/* Fun Facts */}
          <motion.div style={styles.funFacts}>
            {[
              { icon: <FaProjectDiagram size={50} />, value: projects, text: "Projects Completed" },
              { icon: <FaTrophy size={50} />, value: awards + "+", text: "Awards & Recognition" },
              { icon: <FaClock size={50} />, value: internships, text: "Internships" },
            ].map((item, index) => (
              <motion.div key={index} style={styles.factCard} whileHover={{ scale: 1.1 }}>
                <motion.div style={styles.factIcon} whileHover={{ rotate: 360 }}>
                  {item.icon}
                </motion.div>
                <h3 style={styles.factValue}>{item.value}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.a href={resume} download="Siyam Resume.pdf" style={styles.downloadBtn}>
            Download Resume
          </motion.a>
        </div>

        {/* Profile Picture (Right for Desktop, Top for Mobile) */}
        <motion.div
          className="profile-pic"
          style={styles.profilePicContainer}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profile} alt="Profile" style={styles.profileImage} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Styles
const styles = {
  section: {
    background: "linear-gradient(135deg, #090909, #1a002e, #2c003e)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    padding: "80px 20px", // Increased padding for overall spacing
    position: "relative",
    overflow: "hidden",
  },
  aboutContainer: {
    maxWidth: "1200px",
    padding: "50px", // Added more padding for breathing room
    borderRadius: "20px",
    background: "rgba(20, 20, 40, 0.85)",
    backdropFilter: "blur(15px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0px 0px 40px rgba(216, 180, 254, 0.7)",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "50px", // More space between text and image
  },
  highlight: {
    color: "#D8B4FE", // Vibrant Purple
    fontWeight: "bold",
    textShadow: "0px 0px 10px rgba(216, 180, 254, 0.8)", // Purple Glow Effect
  },
  
  textContent: {
    flex: "2",
    maxWidth: "750px",
    color: "#EEE",
    padding: "20px", // Added spacing inside the text container
  },
  heading: {
    fontSize: "2.7rem",
    color: "#D8B4FE",
    textShadow: "0px 0px 20px rgba(216, 180, 254, 0.8)",
    marginBottom: "25px", // More space below heading
  },
  description: {
    fontSize: "1.3rem",
    color: "#EEE",
    lineHeight: "1.8",
    marginBottom: "30px", // More space below description
  },
  funFacts: {
    display: "flex",
    justifyContent: "center",
    gap: "50px", // Increased spacing between fun fact cards
    flexWrap: "wrap",
    textAlign: "center",
    maxWidth: "700px",
    marginTop: "20px", // Added space between description and fun facts
  },
  factCard: {
    flex: "1 1 180px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "25px", // Added internal spacing
    borderRadius: "15px",
    boxShadow: "0px 5px 20px rgba(216, 180, 254, 0.5)",
  },
  profilePicContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px", // Added margin to separate from text
  },
  profileImage: {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    border: "6px solid #D8B4FE",
    borderRadius: "50%",
    boxShadow: "0px 0px 35px rgba(216, 180, 254, 0.8)",
  },
  downloadBtn: {
    display: "inline-block",
    marginTop: "40px",
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#D8B4FE",
    background: "rgba(255, 255, 255, 0.1)",
    border: "2px solid #D8B4FE",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
    boxShadow: "0px 5px 15px rgba(216, 180, 254, 0.6)",
    whiteSpace: "nowrap", // Prevents text wrapping
    textAlign: "center", // Ensures it remains centered
    width: "max-content", // Ensures the button takes only necessary width
    alignSelf: "center", // Centers it within flex containers if needed
  },  
  profilePicContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    border: "6px solid #D8B4FE",
    borderRadius: "50%",
    boxShadow: "0px 0px 35px rgba(216, 180, 254, 0.8)",
  },
  
};

// Responsive Styles (Only Changes Mobile View)
const responsiveStyles = `
  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }
    .profile-pic {
      order: -1;
      margin-bottom: 20px;
    }
    .download-btn {
      display: inline-block;
      text-align: center;
      width: auto;
      margin: 20px auto;
    }
  }
`;

const StyleTag = () => <style>{responsiveStyles}</style>;

export default () => (
  <>
    <StyleTag />
    <About />
  </>
);
