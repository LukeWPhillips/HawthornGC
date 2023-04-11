import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuToggle } from "../components/Burger.jsx/Toggle";
import { Navigation } from "../components/Burger.jsx/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel_Hero";
import CarouselTwo from "../components/Carousel_Reviews";
import { animate, easeIn, motion, useCycle } from "framer-motion";
import Hedge from "../assets/jpg/hedge.jpg";
import Planting from "../assets/jpg/planting.jpg";
import Grass from "../assets/jpg/grass.jpg";
import Pruning from "../assets/jpg/pruning.jpg";
import Patio from "../assets/jpg/patio.jpg";
import Clearance from "../assets/jpg/clearance.jpg";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: "#398378",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: "transparent",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Home() {
  const location = useLocation();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    let handler = () => {
      if (isOpen == true) {
        toggleOpen();
        document.body.removeEventListener("click", handler);
      } else {
        return () => document.body.removeEventListener("click", handler);
      }

      console.log();
    };

    document.body.addEventListener("click", handler);
  }, [location]);

  const imageAnimate = {
    offscreen: { y: 100 },
    onscreen: {
      y: -100,
      transition: { type: "spring", default: { ease: "linear" } },
    },
  };

  return (
    <>
      <div className="container">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="100%"
          className="burger_nav"
        >
          <motion.div
            className="navbar"
            variants={sidebar}
            setMenuOpen={true}
          />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <Header />

        <Carousel className="carousel" />

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
          <div id="services" className="line-3"></div> My Services
        </h1>
        <div className="services-container">
          <div className="grid-container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              <img src={Hedge} alt="" />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              {" "}
              <img src={Planting} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.1 }}
              variants={imageAnimate}
            >
              {" "}
              <img src={Grass} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              {" "}
              <img src={Pruning} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              {" "}
              <img src={Patio} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              <img src={Clearance} alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
          <h1 className="heading_reviews">Customer Testimonials</h1>
          <h3>
            Hear what our satisfied customers have to say about our services;
          </h3>
          {/* // eslint-disable-next-line */}
          <CarouselTwo />
        </div>
        <div id="contact" className="contact">
          <h1 id="header_1">
            <div className="line-3"></div> Get In Touch
          </h1>
          <div className="icons-container">
            <BsTelephone className="icon" />
            <p>+44 7582 199193</p>
            <AiOutlineMail
              onClick={() =>
                window.open(
                  "mailto:aarontimms82@gmail.com?subject=customer%20enquiry&body=Please%20leave%20your%20contact%20details"
                )
              }
              title="www.google.co.in"
              className="icon"
            />
            <p>aarontimms82@gmail.com</p>
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
