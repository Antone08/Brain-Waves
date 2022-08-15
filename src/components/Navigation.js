import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/brainwaves">
            Brainwaves
          </NavLink>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/">
                  Login
                </NavLink>
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/beta">
                  Beta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/alpha">
                  Alpha
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/theta">
                  Theta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/delta">
                  Delta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/summary">
                  Summary
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;