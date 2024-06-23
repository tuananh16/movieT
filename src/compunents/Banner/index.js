import React from "react";
import "./style.scss";
import videoSrc from "../../videoBanner/trailer.mp4";
// import "../../reset.css";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <div className="video-container">
        <video className="banner-video" autoPlay muted controls Volume loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="banner-info">
        <img
          src="https://moviez.shop/movies/Your%20Name/logo.png"
          alt="logo"
          className="banner-logo"
        />
        <p className="banner-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="container-btn">
          <button className="default-button btn">
            <FaPlay />
            phát
          </button>
          <button
            className="default-button btn btn-i"
            style={{ backgroundColor: "rgba(109, 109, 110, 0.7)" }}
          >
            <FaInfoCircle />
            chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
