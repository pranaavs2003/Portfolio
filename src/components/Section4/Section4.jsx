import React from "react";
import "./section4.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Section4() {
  return (
    <div className="section4">
      <div className="top__text">Other Noteworthy Projects</div>
      <div className="text__github">View my GitHub Profile</div>
      <div className="project__container">
        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/Personalized_Recommender_System"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">
              Personalized Recommender System
            </div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">Python</span>
            <span className="tool">Tensorflow</span>
            <span className="tool">Streamlit</span>
          </div>
        </div>

        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/DBMS-jcomp"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">Huntr</div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">React</span>
            <span className="tool">Node.js</span>
            <span className="tool">MySQL</span>
          </div>
        </div>

        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/DCN_jcomp"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">Skribbl</div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">React</span>
            <span className="tool">Node.js</span>
            <span className="tool">Sockets.io</span>
          </div>
        </div>

        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/twitter-clone"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">Twitter Clone</div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">React</span>
            <span className="tool">Node.js</span>
            <span className="tool">MongoDB</span>
          </div>
        </div>

        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/hand-tracking-mediapipe"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">Gesture based Volume Control</div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">Python</span>
            <span className="tool">OpenCV</span>
            <span className="tool">Mediapipe</span>
          </div>
        </div>

        <div className="project">
          <div className="top__container">
            <div className="left__container">
              <FolderOutlinedIcon className="icon" />
            </div>
            <div className="right__container">
              <a
                className="link"
                href="https://github.com/pranaavs2003/RentSetGO-"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="middle__container">
            <div className="title__container">RentSetGO</div>
            <div className="desc__container">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </div>
          </div>
          <div className="bottom__container">
            <span className="tool">React</span>
            <span className="tool">Node.js</span>
            <span className="tool">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
