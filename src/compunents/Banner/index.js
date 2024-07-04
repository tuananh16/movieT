import React from "react";
import "./style.scss";
import videoSrc from "../../videoBanner/trailer2.mp4";
// import "../../reset.css";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="video-container">
        <video className="banner-video" autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="banner-info">
        <img
          src="https://moviez.shop/movies/Solo%20Leveling/logo.png"
          alt="logo"
          className="banner-logo"
        />
        <p className="banner-description">
          Trong một thế giới mà những thợ săn, những con người sở hữu khả năng
          phép thuật, phải chiến đấu với những con quái vật chết người để bảo vệ
          loài người khỏi sự hủy diệt, một thợ săn nổi tiếng yếu ớt tên là Sung
          Jin-woo thấy mình ở trong một cuộc đấu tranh sinh tồn dường như bất
          tận.
        </p>
        <div className="container-btn">
          <Link to={`/phim/toi-thang-cap-mot-minh`}>
            <button className="default-button btn">
              <FaPlay />
              phát
            </button>
          </Link>
          <button
            className="default-button btn btn-i"
            style={{
              backgroundColor: "rgba(109, 109, 110, 0.7)",
              minWidth: "120px",
            }}
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
