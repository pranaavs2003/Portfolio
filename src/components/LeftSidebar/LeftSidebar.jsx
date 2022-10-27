import React from "react";
import "./leftSidebar.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LeftSidebar() {
  return(
    <div className="leftSidebar">
      <div className="icon__container">
        <span className="icon"><GitHubIcon /></span>
        <span className="icon"><RedditIcon /></span>
        <span className="icon"><LinkedInIcon /></span>
      </div>
      <div className="line__container"></div>
    </div>
  );
}
