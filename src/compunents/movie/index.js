import React from "react";
import "./style.scss";

function Movie({ movie }) {
  const { name, thumb_url, current_episode } = movie;
  return (
    <div className="wrap-movie">
      <div className="movie">
        <img src={thumb_url} alt={name} title={name} />
        <div className="info-movie">
          <h3>Phim: {name}</h3>
          <p>Tình trạng: {current_episode}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
