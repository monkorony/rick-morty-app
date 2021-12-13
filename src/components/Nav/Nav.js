import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand" href="#">
        Wubba wubba lub dub!
      </div>
      <div className="collapse navbar-collapse">
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
