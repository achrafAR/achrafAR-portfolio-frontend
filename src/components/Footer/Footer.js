import React from "react";
import "./footer.css";
import achrafLogo from "../../Images/achrafLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-socialmedia">
        <div className="footer-logo">
          <img src={achrafLogo} alt="logo" />
        </div>
        <div className="footer-socialmedia">
          <a
            href="https://www.linkedin.com/in/achrafar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn style={{ color: "white" }} />
          </a>
          <a
            href="https://www.instagram.com/achrafalrachini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/achraf.alrachini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF style={{ color: "white" }} />
          </a>
          <a
            href="https://github.com/achrafAR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
