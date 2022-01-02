import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light bg-light`}>
    <div className="container-fluid">
      <div className={`${styles.navBrand} navbar-brand`}>
        <NavLink to="/">
          Wubba wubba lub dub!
        </NavLink>
        
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
        <span className="fas fa-bars open text-dark"></span>
        <span className="fas fa-times close text-dark"></span>
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
