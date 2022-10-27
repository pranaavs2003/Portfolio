import React from "react";
import "./main.scss";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import Content from "../Content/Content";

export default function Main() {
  return (
    <div className="main">
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
  );
}
