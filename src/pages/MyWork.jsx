import React from "react";
import { useEffect, useState, useRef } from "react";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../components/Burger.jsx/Toggle";
import { Navigation } from "../components/Burger.jsx/Nav";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../components/Header";
import dm1 from "../assets/jpg/dm1.jpg";
import dm2 from "../assets/jpg/dm2.jpg";
import dm3 from "../assets/jpg/dm3.jpg";
import dm4 from "../assets/jpg/dm4.jpg";
import dm5 from "../assets/jpg/dm5.jpg";
import dm6 from "../assets/jpg/dm6.jpg";
import dm7 from "../assets/jpg/dm7.jpg";
import dm8 from "../assets/jpg/dm8.jpg";
import Clear1 from "../assets/jpg/clear1.jpg";
import Clear1_1 from "../assets/jpg/clear1.1.jpg";
import Clear2 from "../assets/jpg/clear2.jpg";
import Clear3 from "../assets/jpg/clear3.jpg";
import Clear3_1 from "../assets/jpg/clear3.1.jpg";
import Clear3_2 from "../assets/jpg/clear3.2.jpg";
import Clear4 from "../assets/jpg/clear4.jpg";
import Clear4_1 from "../assets/jpg/clear4.1.jpg";
import L1 from "../assets/jpg/l1.jpg";
import L2 from "../assets/jpg/l2.jpg";
import L3 from "../assets/jpg/l3.jpg";
import L4 from "../assets/jpg/l4.jpg";
import L5 from "../assets/jpg/l5.jpg";
import L6 from "../assets/jpg/l6.jpg";
import L7 from "../assets/jpg/l7.jpg";
import L8 from "../assets/jpg/l8.jpg";
import Footer from "../components/Footer";

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

const dm_images = [dm1, dm2, dm3, dm4, dm5, dm6, dm7, dm8];
const clear_images = [
  Clear1,
  Clear1_1,
  Clear2,
  Clear3,
  Clear3_1,
  Clear3_2,
  Clear4,
  Clear4_1,
];
const lscape_images = [L1, L2, L3, L4, L5, L6, L7, L8];

function MyWork() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= dm_images.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
        className="burger_nav"
      >
        <motion.div className="navbar" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <Header />

      <div
        style={{
          display: loading ? "block" : "none",
          height: "100vh",
        }}
      >
        <ClipLoader />
      </div>

      <div
        className="gallery-container"
        style={{ display: loading ? "none" : "flex" }}
      >
        <h1>Garden design and maintenance</h1>
        <div className="gallery_grid">
          {dm_images.map((image) => (
            <img key={image} src={image} alt="dm" onLoad={imageLoaded} />
          ))}
        </div>
        <h1>Garden clearances and tidy ups</h1>
        <div className="gallery_grid">
          {clear_images.map((image) => (
            <img key={image} src={image} alt="clear" onLoad={imageLoaded} />
          ))}
        </div>

        <h1>Landscaping</h1>
        <div className="gallery_grid">
          {lscape_images.map((image) => (
            <img key={image} src={image} alt="lscape" onLoad={imageLoaded} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyWork;
