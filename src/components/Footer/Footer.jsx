import React from "react";
import "./footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return(
    <div className="footer">
        <div className="top__text">Built using React & SASS</div>
        <div className="icon__container">
            <span className="item"><GitHubIcon /></span>
        </div>
    </div>
  );
}
