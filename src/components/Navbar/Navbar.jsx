import React, { useState, useEffect } from "react";
import "./navbar.scss";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import { motion } from "framer-motion";

export default function Navbar() {
  //const [isNav, setIsNav] = useState(true);

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 1 }}
      animate={{ y: "0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container">
        <div className="left__container">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1666719620/Portfolio/logo_2_cgw8y9.svg"
            alt="logo-img"
            className="logo"
          />
        </div>
        <div className="hamburger__icon">
          <ReorderRoundedIcon className="icon" />
        </div>
        <div className="right__container">
          <span className="link">
            <span className="count">01.</span>
            <span className="text">About</span>
          </span>
          <span className="link">
            <span className="count">02.</span>
            <span className="text">Skills</span>
          </span>
          <span className="link">
            <span className="count">03.</span>
            <span className="text">Work</span>
          </span>
          <span className="link">
            <span className="count">04.</span>
            <span className="text">Contact</span>
          </span>
          <button className="resume__button">Resume</button>
        </div>
      </div>
    </motion.div>
  );
}
