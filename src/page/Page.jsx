import React, { useEffect } from "react";
import "./page.scss";
import Navbar from "../components/Navbar/Navbar";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import { motion } from "framer-motion";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Section4 from "../components/Section4/Section4";
import Section6 from "../components/Section6/Section6";
import Footer from "../components/Footer/Footer";

export default function Page() {
  //useEffect(() => console.log("hello"));
  return (
    <div className="page">
      <Navbar />
      <LeftSidebar />
      <div className="content__container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section6 />
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
}
