import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image2 from "../assets/Screenshot (51).png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Image2} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Mobile app</h4>
            <ul>
              <li>Features</li>
              <li>Live share</li>
              <li>Video record</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li>Featured artists</li>
              <li>The Portal</li>
              <li>Live events</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>History</li>
            </ul>
          </div>
        </div>
        <div className="footer-buttons">
          <button className="btn-register">Register</button>
          <button className="btn-login">Log in</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Photo, Inc. 2019. We love our users!</p>
        <div className="social-links">
          <span>Follow us:</span>
          <a href="#"><FaFacebook/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaInstagram/></a>
          
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;