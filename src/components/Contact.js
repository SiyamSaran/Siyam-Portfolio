import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "animate.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_yyegv96", 
      "template_deisgpa", 
      form.current,
      "S5nNAKoQBzPW9oFK5"
    )
    .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "🎉 Sent Successfully!",
          text: "Thanks for reaching out. I'll reply soon!",
          confirmButtonText: "Cool!",
          confirmButtonColor: "#6E45E2",
          background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
          color: "#fff",
          showClass: {
            popup: "animate__animated animate__zoomIn animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });
        setFormData({ name: "", email: "", message: "" }); 
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "❌ Something Went Wrong!",
          text: "Try again later!",
          confirmButtonText: "Okay",
          confirmButtonColor: "#FF5733",
          background: "linear-gradient(135deg, #8e0e00, #1f1c18)",
          color: "#fff",
          showClass: {
            popup: "animate__animated animate__shakeX animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });
      }
    );
};
  
  return (
    <motion.section
      id="contact"
      className="py-5 text-center text-white"
      style={{
        background: "linear-gradient(135deg, #090909, #1a1a40)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="mb-4" style={{ color: "#A899FA", textShadow: "0px 0px 15px #A899FA" }}>
        Get in Touch
      </h2>

      {/* Contact Form */}
      <motion.form
        ref={form}
        className="p-4 rounded shadow-lg"
        style={{
          background: "rgba(20, 20, 50, 0.9)",
          backdropFilter: "blur(15px)",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px rgba(168, 153, 250, 0.7)",
          width: "400px",
        }}
        onSubmit={sendEmail}
        whileHover={{ scale: 1.02 }}
      >
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control custom-input"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control custom-input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control custom-input"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="btn btn-light btn-lg px-4 custom-btn"
          whileHover={{ scale: 1.1 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Media Links */}
      <div className="mt-4">
        <p>Or connect with me on:</p>
        <div className="d-flex justify-content-center gap-3">
          <motion.a href="mailto:siyampritham@gmail.com" target="_blank" className="social-icon">
            <FaEnvelope />
          </motion.a>
          <motion.a href="https://github.com/SiyamSaran" target="_blank" className="social-icon">
            <FaGithub />
          </motion.a>
          <motion.a href="https://linkedin.com/in/siyam-saran-m" target="_blank" className="social-icon">
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://www.instagram.com/siyam_siddharth_?igsh=aGQ5MmNuZzZ5emcz" target="_blank" className="social-icon">
            <FaInstagram />
          </motion.a>
        </div>
      </div>

      <style>{`
        .custom-input {
          background: rgba(50, 50, 100, 0.7);
          color: white !important;
          caret-color: white;
          border: none;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
          outline: none;
          transition: 0.3s;
          }

        .custom-input::placeholder {
          color: rgba(200, 200, 255, 0.7);
        }

        .custom-input:focus {
          box-shadow: 0px 0px 15px #A899FA;
          background: rgba(50, 50, 100, 0.9);
          color: white !important;
        }

        .custom-btn {
          background: linear-gradient(135deg, #A899FA, #6E45E2);
          color: white;
          border: none;
          transition: 0.3s;
        }
        .custom-btn:hover {
          box-shadow: 0px 0px 15px #A899FA;
        }
        .social-icon {
          font-size: 2rem;
          color: white;
          transition: 0.3s;
        }
        .social-icon:hover {
          color: #A899FA;
          transform: scale(1.2);
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;
