import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__init-text">
        Made by João Guimarães <span>&copy;</span> 2020
      </p>
      <ul className="footer__socials">
        <li className="item">
          <a href="" className="item__link">
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a href="" className="item__link">
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a href="" className="item__link">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
