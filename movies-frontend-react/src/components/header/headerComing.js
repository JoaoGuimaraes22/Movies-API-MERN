import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const HeaderComing = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="navbar__title">
          <a href="/">
            Featured Movies{" "}
            <FaArrowDown
              style={{ color: "#fff", fontSize: "2rem" }}
              className="fa-arr"
            />
          </a>
        </h1>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link to="/" className={`link`}>
              Most Popular
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/playing" className={`link`}>
              Now Playing
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/coming" className={`link curr-link`}>
              Coming Soon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComing;
