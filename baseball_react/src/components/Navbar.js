import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg p-2"
      style={{ backgroundColor: "#003366" }}
    >
      <Link className="navbar-brand" to="/" style={{ color: "#FFFFFF" }}>
        <img
          style={{ height: "30px", width: "30px" }}
          src="/icon2.png"
          alt=""
        />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/" style={{ color: "#FFFFFF" }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ color: "#FFFFFF" }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" style={{ color: "#FFFFFF" }}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/playerselection"
            style={{ color: "#FFFFFF" }}
          >
            Player Selection
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
