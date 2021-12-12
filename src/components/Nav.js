import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand" href="#">
        Wubba wubba lub dub!
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/characters/">
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/episodes/">
              Episodes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/location/">
              Location
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
