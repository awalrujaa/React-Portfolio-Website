import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ruja
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ruja.awal/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/__awalruja__/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ruja-awal-b971551aa/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/awalrujaa" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ruja Awal. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
