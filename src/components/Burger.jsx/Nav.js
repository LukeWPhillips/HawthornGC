import * as React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Items = [
  { id: "0", text: "HOME", to: "/" },
  { id: "1", text: "SERVICES", to: "/#services" },
  { id: "2", text: "MY WORK", to: "/work" },
  { id: "3", text: "CONTACT", to: "/#contact" },
];

export const Navigation = () => (
  <motion.ul variants={variants} className="burger_ul">
    {Items.map((item) => (
      <NavLink to={item.to} style={{ textDecoration: "none" }}>
        <MenuItem id={item.id} key={item.id} text={item.text} />
      </NavLink>
    ))}
  </motion.ul>
);
