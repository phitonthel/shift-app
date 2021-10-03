import React from 'react';
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mx-4" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Staff</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Schedule</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}