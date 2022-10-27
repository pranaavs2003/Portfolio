import React from "react";
import "./section2.scss";

export default function Section2() {
  return (
    <div className="section2">
      <div className="title">
        <span className="number">01.</span>
        <span className="title__text">About Me</span>
        <span className="line"></span>
      </div>
      <div className="content">
        <div className="left__container">
          <div className="text__content">Hello! My name is <span className="highlight">Pranaav</span> and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about <span className="highlight">HTML & CSS!</span></div>
          <div className="text__content">Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</div>
          <div className="text__content">I also recently launched a course that covers everything you need to build a web app with the <span className="highlight">Spotify API using Node & React</span>.</div>
        </div>
        <div className="right__container">
          <div className="image__container">
            <div className="image__overlay">
              <img src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" alt="profile-img" className="my__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
