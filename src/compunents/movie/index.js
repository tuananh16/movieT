import React from "react";
import "./style.scss";

function Moive({ movie }) {
  //   console.log(movie);
  const { name, poster_url } = movie;

  return (
    <a href="#" alt={name}>
      <img src={poster_url} alt={name} />
    </a>
  );
}

export default Moive;
