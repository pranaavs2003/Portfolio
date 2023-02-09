import React from "react";
import "./section3.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Section3() {
  return (
    <div className="section3">
      <div className="title">
        <span className="number">02.</span>
        <span className="title__text">Some Things I’ve Built</span>
        <span className="line"></span>
      </div>
      <div className="content">
        <div className="project">
          <div className="left__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675915400/Portfolio/Spotify_Clone_Thumbnail_skodpj.png"
              alt="laptop-img"
              className="laptop"
            />
          </div>
          <div className="right__container">
            <div className="featured__text">Featured Project</div>
            <div className="project__text">Spotify Clone</div>
            <div className="project__desc">
              Introducing the full-fledged Spotify clone! Built with React. With
              the power of the Spotify API, you can play millions of tracks, and
              see your liked songs and playlists.
            </div>
            <div className="tools">
              <span className="tool">React</span>
              <span className="tool">SCSS</span>
              <span className="tool">Spotify API</span>
            </div>
            <div className="links">
              <span className="link">
                <a
                  href="https://github.com/Dhanushvardan/spotify_clone"
                  className="link"
                >
                  <GitHubIcon />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="left__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675916606/Portfolio/Quinproc_Website_Thumbnail_a3cey3.png"
              alt="laptop-img"
              className="laptop"
            />
          </div>
          <div className="right__container">
            <div className="featured__text">Featured Project</div>
            <div className="project__text">Quinproc</div>
            <div className="project__desc">
              Introducing Quinproc, a Med-Tech start-up revolutionizing
              pregnancy care with innovative monitoring devices. Discover the
              future of prenatal care today!
            </div>
            <div className="tools">
              <span className="tool">React</span>
              <span className="tool">SCSS</span>
            </div>
            <div className="links">
              <span className="link">
                <a href="https://quinproc.co.in/" className="link">
                  <GitHubIcon />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="left__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675918821/Portfolio/RapidRoutes_Website_Thumbnail_nfqw4e.png"
              alt="laptop-img"
              className="laptop"
            />
          </div>
          <div className="right__container">
            <div className="featured__text">Featured Project</div>
            <div className="project__text">RapidRoutes</div>
            <div className="project__desc">
              RapidRoutes is a automated system for managing the bus fleet of
              VIT Chennai Campus. Say goodbye to manual processes and hello to a
              more streamlined system.
            </div>
            <div className="tools">
              <span className="tool">Python</span>
              <span className="tool">Pandas</span>
              <span className="tool">Streamlit</span>
            </div>
            <div className="links">
              <span className="link">
                <a
                  className="link"
                  href="https://github.com/pranaavs2003/pythonProject1"
                >
                  <GitHubIcon />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
