import React from "react";
import Logo from "../assets/svg/logo2.svg";

function Footer() {
  return (
    <div className="footer-container">
      <img className="logo-2" src={Logo} alt="logo" />
      <p>&copy; Hawthorn Garden Care 2023</p>

      <p>Designed and Built by Luke Phillips </p>
    </div>
  );
}

export default Footer;
