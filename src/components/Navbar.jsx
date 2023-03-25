import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar_container">
        <ul>
          <li>
            <NavLink to="/hawthorn" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/hawthorn/#services">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="nav-link">
              MY WORK
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/hawthorn/#contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
