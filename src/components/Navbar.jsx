import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-link">HOME</NavLink>
          </li>
          <li>
            <NavLink className="nav-link">SERVICES</NavLink>
          </li>
          <li>
            <NavLink className="nav-link">MY WORK</NavLink>
          </li>
          <li>
            <NavLink className="nav-link">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
