import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeaderPopular = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="navbar__title">
          <a href="/">Featured Movies</a>
        </h1>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link to="/" className={`link curr-link`}>
              Most Popular
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/playing" className={`link`}>
              Now Playing
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/coming" className={`link`}>
              Coming Soon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPopular;
