import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar_container">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/#services">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="nav-link">
              MY WORK
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/#contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
