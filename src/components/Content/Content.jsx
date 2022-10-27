import React, {useEffect} from "react";
import "./content.scss";
import Section1 from "../Section1/Section1";

export default function Content() {
  return(
    <div className="content">
      <Section1 />
      <Section1 />
    </div>
  );
}
