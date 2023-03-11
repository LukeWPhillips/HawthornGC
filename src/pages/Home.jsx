import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo2.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel_Hero";
import Carousel_2 from "../components/Carousel_Reviews";
import { easeIn, motion, useScroll } from "framer-motion";
import Hedge from "../assets/jpg/hedge.jpg";
import Planting from "../assets/jpg/planting.jpg";
import Grass from "../assets/jpg/grass.jpg";
import Pruning from "../assets/jpg/pruning.jpg";
import Patio from "../assets/jpg/patio.jpg";
import Clearance from "../assets/jpg/clearance.jpg";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Home() {
  const overlayText = () => {
    return <div className="hello">Hello</div>;
  };

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

        {/* onview could bring a burger menu around about here fro sticky menu */}
        <div className="about">
          <h2>All your landscaping needs in Berkshire</h2>

          <div className="line-1"></div>
          <p>
            Hawthorn Garden Care will provide you with the best service around.
            With over 15 years as a a landscape gardener i will offer personal
            service and reliability.
          </p>
        </div>
        <h1 id="header_1">
          <div className="line-3"></div> MY SERVICES
        </h1>
        <div className="services-container">
          <div className="grid-container">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false }}
              transition={{ type: "spring", default: { ease: "linear" } }}
            >
              <img src={Hedge} alt="" />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.2,
                }}
              >
                <hr className="line-2"></hr>Hedge Trimming
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",

                default: { ease: "linear" },
              }}
            >
              {" "}
              <img src={Planting} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.2,
                }}
              >
                <hr className="line-2"></hr>Planting
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",

                default: { ease: "linear" },
              }}
            >
              {" "}
              <img src={Grass} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.2,
                }}
              >
                <hr className="line-2"></hr>Grass Cutting
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                delay: 0.2,
                default: { ease: "linear" },
              }}
            >
              {" "}
              <img src={Pruning} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.5,
                }}
              >
                <hr className="line-2"></hr>Pruning
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                default: { ease: "linear" },
                delay: 0.2,
              }}
            >
              {" "}
              <img src={Patio} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.5,
                }}
              >
                <hr className="line-2"></hr>Patio Cleaning
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              whileHover={(overlayText(), { opacity: 0.5 })}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                default: { ease: "linear" },
                delay: 0.2,
              }}
            >
              <img src={Clearance} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: easeIn,
                  default: { ease: "linear" },
                  delay: 0.5,
                }}
              >
                <hr className="line-2"></hr>Garden Clearances
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="reviews-container">
          <h1 className="heading_2">Customer Testimonials</h1>
          <h3>
            Hear what our satisfied customers have to say about our services
          </h3>
          <Carousel_2 />
        </div>
        <div className="contact">
          <h1 id="header_1">
            <div className="line-3"></div> Get In Touch
          </h1>
          <div className="icons-container">
            <BsTelephone className="icon" /> +44 7582 199193
            <AiOutlineMail
              onClick={() =>
                window.open(
                  "mailto:aarontimms82@gmail.com?subject=customer%20enquiry&body=Please%20leave%20your%20contact%20details"
                )
              }
              title="www.google.co.in"
              className="icon"
            />
            aarontimms82@gmail.com
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Home;
