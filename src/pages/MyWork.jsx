import React from "react";
import { useEffect } from "react";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../components/Burger.jsx/Toggle";
import { Navigation } from "../components/Burger.jsx/Nav";
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

function MyWork() {
  const [isOpen, toggleOpen] = useCycle(false, true);

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
      <div className="gallery-container">
        <h1>Garden design and maintenance</h1>
        <div className="gallery_grid">
          <img src={dm1} alt="dm_image" />
          <img src={dm2} alt="dm_image" />
          <img src={dm3} alt="dm_image" />
          <img src={dm4} alt="dm_image" />
          <img src={dm5} alt="dm_image" />
          <img src={dm6} alt="dm_image" />
          <img src={dm7} alt="dm_image" />
          <img src={dm8} alt="dm_image" />
        </div>
        <h1>Garden clearances and tidy ups</h1>
        <div className="gallery_grid">
          <img src={Clear1} alt="clearance_image" />
          <img src={Clear1_1} alt="clearance_image" />
          <img src={Clear2} alt="clearance_image" />
          <img src={Clear3} alt="clearance_image" />
          <img src={Clear3_1} alt="clearance_image" />
          <img src={Clear3_2} alt="clearance_image" />
          <img src={Clear4} alt="clearance_image" />
          <img src={Clear4_1} alt="clearance_image" />
        </div>

        <h1>Landscaping</h1>
        <div className="gallery_grid">
          <img src={L1} alt="landscape_image" />
          <img src={L2} alt="landscape_image" />
          <img src={L3} alt="landscape_image" />
          <img src={L4} alt="landscape_image" />
          <img src={L5} alt="landscape_image" />
          <img src={L6} alt="landscape_image" />
          <img src={L7} alt="landscape_image" />
          <img src={L8} alt="landscape_image" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyWork;
