import React from "react";
import Logo from "../assets/svg/logo2.svg";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
