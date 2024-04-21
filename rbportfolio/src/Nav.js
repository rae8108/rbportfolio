import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="p-nav">
        <p>RB</p>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Resume
        </Link>
        <br />
        <Link className="nav-link" to="/github">
          GitHub
        </Link>
        <br />
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
