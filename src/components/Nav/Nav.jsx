import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
    <div className={`${styles.nav__wrap} container-fluid`}>
      <div className={`${styles.navBrand} navbar-brand`}>
        <NavLink to="/">
          Wubba wubba lub dub!
        </NavLink>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.nav__link}`} to="/">
            Characters
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.nav__link}`} to="/episodes/">
            Episodes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.nav__link}`} to="/location/">
            Location
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
