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
          <div className="text__content">
            Hello! My name is <span className="highlight">Pranaav</span> and I
            enjoy creating things that live on the internet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolore deserunt at veritatis,
            vero iste tempora. Sequi cumque fugit amet ab eum, explicabo
            aliquid, nihil repellat magnam recusandae nostrum
            <span className="highlight">HTML & CSS!</span>
          </div>
          <div className="text__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt at veritatis, vero iste tempora. Sequi cumque fugit amet ab
            eum, explicabo aliquid, nihil repellat magnam recusandae nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt at veritatis, vero iste tempora. Sequi cumque fugit amet ab
            eum, explicabo aliquid, nihil repellat magnam recusandae nostrum.
          </div>
          <div className="text__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt at veritatis, vero iste tempora. Sequi cumque fugit amet ab
            eum, explicabo aliquid, nihil repellat magnam recusandae nostru
            <span className="highlight">Spotify API using Node & React</span>.
          </div>
        </div>
        <div className="right__container">
          <div className="image__container">
            <div className="image__overlay">
              <img
                src="https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"
                className="my__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
