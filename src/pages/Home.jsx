import React from "react";
import Logo from "../assets/svg/logo2.svg";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <div className="container">
        <header className="header-container">
          <div className="logo">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <Navbar />
        </header>
        <Carousel className="carousel" />
        <div className="about">
          <h2>All your landscaping needs in Berkshire</h2>
          <br></br>
          <p>
            Hawthorn Garden Care will provide you with the best service around.
            With over 15 years as a a landscape gardener i will offer personal
            service and reliability.
          </p>
        </div>
        <div className="services">
          <h1>Services</h1>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
