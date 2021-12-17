import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand" href="#">
        Wubba wubba lub dub!
      </div>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars open text-dark"></span>
        <span class="fas fa-times close text-dark"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Characters
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/episodes/">
              Episodes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/location/">
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
