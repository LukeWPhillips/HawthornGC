import React from "react";
import Logo from "../assets/svg/logo2.svg";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <div className="hawthorn-footer">
        <img className="logo-2" src={Logo} alt="logo" />
        <p>&copy; Hawthorn Garden Care 2023</p>
        <a href="https://www.facebook.com/profile.php?id=100057164931944">
          <AiFillFacebook className="fbook-logo" />
        </a>
      </div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://lukewphillips.github.io/Portfolio/"
      >
        <p>Designed and Developed by Luke Phillips </p>
      </a>
    </div>
  );
}

export default Footer;
